const express = require('express');

const router = express.Router();

const queries = require('../database/queries');

//!Not sure if this stuff is needed...
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

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


//! This is what I need to make a form for when user clicks the add button.
router.post('/add', (req, res, next) => {
    knex('cellar')
    .insert({
        //left side is database columns, right side is 'names' in CellarAddForm component.
        image: req.body.imgUrl,
        age: req.body.age,
        brand: req.body.brand,
        price: req.body.price,
        blend: req.body.blend,
        weight: req.body.weight,
        purchased: req.body.date,
        Available: req.body.available,
        source: req.body.source,
        rating: req.body.rating
    }, '*')

    .then(() => {
        res.render('add');
    })

    .catch((err) => {
        next(err);
    });
  });




module.exports = router;