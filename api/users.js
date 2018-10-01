const express = require('express');
const router = express.Router();
const queries = require('../database/queries');

const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

//? I'm going to hold on to this version as I may end up using it in the near future
// router.get('/', (req, res) => {
//     queries.getAll().then(users => {
//         res.json(users);
//         console.table(users);
//     });
// });

router.get('/', (req, res, next) => {
    knex('users')
    .orderBy('id')
    .then((users) => {
        console.log(users);
        res.send(users);
      })
      .catch((err) => {
        next(err);
      });
  });



module.exports = router;