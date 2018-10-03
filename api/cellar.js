const express = require('express');
const router = express.Router();
const queries = require('../database/queries');
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

//! I can do it this way by directing it to the queries file or I can do it the way bellow the next 6 lines
// router.get('/', (req, res) => {
//     queries.getAll().then(cellar => {
//         res.json(cellar);
//         console.table(cellar);
        
//     });
// });


//!I think I might prefer to do it this way...
router.get('/', (req, res, next) => {
    knex('cellar')
    .orderBy('id')
    .then((cellar) => {
        console.log(cellar);
        res.send(cellar);
      })
      .catch((err) => {
        next(err);
      });
  });





  router.post('/', (req, res, next) => {
    //todo validate entries here
    queries.create(req.body).then(cellar => {
        res.json(cellar[0]);
        console.log('this is the request body', req.body);
    });
  });

  router.delete('/:id', (req, res) => {
    queries.delete(req.params.id).then(() => {
        res.json({
            deleted: true
        });
    });
  });




module.exports = router;