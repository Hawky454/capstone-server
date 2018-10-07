const express = require('express');
const router = express.Router();
const queriesUsers = require('../database/queriesUsers');
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);



function validUser(user) {
    const validEmail = typeof user.email == 'string';
    const validPassword = typeof user.password == 'string';
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
                res.json({
                    user,
                    message: '✅✅✅✅✅✅✅✅✅✅, this is a message fo ya foo!'
                });
            });
    } else {
        next(new Error('Invalid user, don\'t ask me why'));
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