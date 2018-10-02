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

//! This is what I need to make a form for when user clicks the add button.
// router.post('/', (req, res, next) => {
//     knex('cellar')
//     .insert({
//         image: req.body.imgUrl,
//         age: req.body.age,
//         brand: req.body.brand,
//         price: req.body.price,
//         blend: req.body.blend,
//         weight: req.body.weight,
//         purchased: req.body.date,
//         Available: req.body.available,
//         source: req.body.source,
//         rating: req.body.rating
//     }, '*')

//     .then(() => {
//         res.render('cellar');
//     })

//     .catch((err) => {
//         next(err);
//     });
//   });




module.exports = router;