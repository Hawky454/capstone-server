const express = require('express');
const router = express.Router();
const queriesPipes = require('../database/queriesPipes');
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

router.get('/', (req, res) => {
    queriesPipes.getAll().then(pipes => {
        res.json(pipes);
        console.table(pipes);
    });
});




  router.post('/', (req, res, next) => {
    //todo validate entries here
    queriesPipes.create(req.body).then(pipes => {
        res.json(pipes[0]);
        console.log('this is the request body for pipes', req.body);
    });
  });


  router.delete('/:id', (req, res) => {
    queriesPipes.delete(req.params.id).then(() => {
      res.json({
        deleted: true
      });
    });
  });


module.exports = router;