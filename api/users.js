const express = require('express');
const router = express.Router();
const queriesUsers = require('../database/queriesUsers');
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

router.get('/', (req, res) => {
    queriesUsers.getAll().then(users => {
        res.json(users);
        console.table(users);
    });
});




  router.post('/', (req, res, next) => {
    //todo validate entries here
    queriesUsers.create(req.body).then(users => {
        res.json(users[0]);
        console.log('this is the request body for users', req.body);
    });
  });


  router.delete('/:id', (req, res) => {
    queriesUsers.delete(req.params.id).then(() => {
      res.json({
        deleted: true
      });
    });
  });


module.exports = router;