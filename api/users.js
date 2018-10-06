const express = require('express');
const router = express.Router();
const queriesUsers = require('../database/queriesUsers');
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);


function isValidId(req, res, next) {
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

router.get('/', (req, res) => {
    queriesUsers.getAll().then(users => {
        res.json(users);
        console.table(users);
    });
});

router.get('/:id', isValidId, (req, res, next) => {
    queriesUsers.getOne(req.params.id).then(users => {
        if (users) {
            res.json(users);
            console.table(users);
        } else {
            res.status(404);
            next(new Error('Not Found! Hot Damn!'))
        }
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