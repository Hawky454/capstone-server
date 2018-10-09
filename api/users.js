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

//! Route paths are prepended with users

router.get('/', (req, res) => {
    res.json({
        message: 'okay this is working! 😀'
    });
});

router.get('/signup', (req, res) => {
    queriesUsers.getAll().then(users => {
        res.json(users);
        console.table('this route is working! 😃 😃',users);
    });
});

//! Logic for user sign up!
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
                                        message: '✅ Success!'
                                    });
                                });
                        });
                } else {
                    //email in use
                    next(new Error('Email in use, nice try, Buck-O'));
                }
            });
    } else {
        next(new Error('Invalid user, /signup'));
    }
});


//! Logic for user logging in!!!! Here we go, this is exciting!
router.post('/login', (req, res, next) => {
    if (validUser(req.body)) {
        //check to see if in db
        queriesUsers.getOneByEmail(req.body.email)
            .then(user => {
                console.log('user', user);
                if (user) {
                    // Compare password with hashed password
                    bcrypt.compare(req.body.password, user.password)
                        .then((result) => {
                            // console.log('this is result', result);
                            //if passwords match
                            if (result) {
                                //this is where we set a cookie
                                const isSecure = req.app.get('env') != 'development';
                                res.cookie('user_id', user.id, {
                                    httpOnly: true,
                                    // secure: isSecure,
                                    signed: true
                                });
                                res.json({
                                    result,
                                    message: 'Logged in, success!!🔓'
                                });
                            } else {
                                next(new Error('Invalid login ☹️'));
                            }
                        });
                } else {
                    next(new Error('User not found in the database!'));
                }
            });
    } else {
        next(new Error('Invalid login'));
    }
});



module.exports = router;