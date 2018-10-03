const express = require('express');
const router = express.Router();
const queriesPipes = require('../database/queriesPipes');
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

// router.get('/', (req, res) => {
//     queries.getAll().then(pipes => {
//         res.json(pipes);
//         console.table(pipes);
//     });
// });

//? I'm going to hold on to this version as I may end up using it in the near future
router.get('/', (req, res, next) => {
    knex('pipes')
    .orderBy('id')
    .then((pipes) => {
        console.log(pipes);
        res.send(pipes);
      })
      .catch((err) => {
        next(err);
      });
  });


  router.post('/', (req, res, next) => {
    //todo validate entries here
    queriesPipes.create(req.body).then(pipes => {
        res.json(pipes[0]);
        console.log('this is the request body for pipes', req.body);
    });
  });



module.exports = router;