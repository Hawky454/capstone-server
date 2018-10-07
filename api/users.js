const express = require('express');
const router = express.Router();
const queriesUsers = require('../database/queriesUsers');
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);
const bcrypt = require('bcrypt');



function validUser(user) {
    const validEmail = typeof user.email == 'string' && user.email.trim() != '';
    const validPassword = typeof user.password == 'string' && user.password.trim() != '' && user.password.trim().length >= 3;
    return validEmail && validPassword;

}

router.get('/signup', (req, res) => {
    queriesUsers.getAll().then(users => {
        res.json(users);
        console.table(users);
    });
});

router.post('/signup', (req, res, next) => {
    if (validUser(req.body)) {
        queriesUsers.getOneByEmail(req.body.email)
            .then(user => {
                console.log('user', user);
                if (!user) {
                    //unique email
                    //hash password
                    bcrypt.hash(req.body.password, 8)
                        .then((hash) => {
                            //insert user into db
                            const user = {
                                email: req.body.email,
                                username: req.body.username,
                                address: req.body.address,
                                city: req.body.city,
                                state: req.body.state,
                                zip: req.body.zip,
                                password: hash,
                                date: new Date()
                            };

                            queriesUsers.create(user)
                                .then(id => {
                                    //redirect
                                    res.json({
                                        id,
                                        message: '✅ check yoself befo you wrek yoself!'
                                    });
                                });
                        });
                } else {
                    //email in use
                    next(new Error('Email in use'));
                }
            });
    } else {
        next(new Error('Invalid user, fix yo shite!'));
    }
});

//!don't delete below just in case the one your building doesn't work
//   router.post('/signup', (req, res, next) => {
//     //todo validate entries here
//     queriesUsers.create(req.body).then(users => {
//         res.json(users[0]);
//         console.log('this is the request body for users', req.body);
//     });
//   });


router.delete('/signup/:id', (req, res) => {
    queriesUsers.delete(req.params.id).then(() => {
        res.json({
            deleted: true
        });
    });
});


module.exports = router;