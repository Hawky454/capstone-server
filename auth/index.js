const express = require('express');
const router = express.Router();
const users = require('../database/queriesUsers');

// // Route paths are prepended with /auth

// router.get('/', (req, res) => {
//     res.json({
//         message: '😜😜😜😜😜😜😜😜😜😜😜😜'
//     })
// });

// function validUser(user) {
//     const validEmail = typeof user.email == 'string' && user.email.trim() != '';
//     const validPassword = typeof user.password == 'string' && user.password.trim() != '' && user.password.trim().length >= 3;
//     return validEmail && validPassword;
// }

// router.post('/signup', (req, res, next) => {
//     if (validUser(req.body)) {
//         users
//             .getOneByEmail(req.body.email)
//             .then(users => {
//                 console.log('users', users);
//                 res.json({
//                     message: 'Email is not matching, I need to stop here though to pick up Es'
//                 });
//             });
//     } else {
//         next(new Error('Invalid User Dude!'));
//     }
// });





// module.exports = router;

//! I think this may just be leading to confusion, I don't think I need this folder, I can just use all this logic inside users.js