const express = require('express');
const router = express.Router();
const queries = require('../database/queries');
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);



function isValidId(req, res, next) {
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

function validateEntries(cellar) {
    //todo still trying to figure out how to properly validate entries
    const hasPrice = !isNaN(cellar.price);
    const hasRating = !isNaN(cellar.rating);
    const hasWeight = !isNaN(cellar.weight);
    const hasAge = !isNaN(cellar.age);
    const hasURL = isNaN(cellar.image) && cellar.image.trim() != '';
    return hasPrice && hasRating && hasWeight && hasAge && hasURL;
  }


router.get('/', (req, res) => {
    queries.getAll().then(cellar => {
        res.json(cellar);
        console.table(cellar);
        
    });
});



router.post('/', (req, res, next) => {
    if(validateEntries(req.body)) {
        queries.create(req.body).then(cellar => {
            res.json(cellar[0]);
        });
    } else {
        next(new Error('Invalid Entry Buckaroo'));
    }
});

router.put('/:id', (req, res, next) => {
    //todo validate entries
    //!Still need to complete this one.
    queries.put(req.body).then
})


router.delete('/:id', isValidId, (req, res) => {
    //todo validate entries
    queries.delete(req.params.id).then(() => {
        res.json({
            deleted: true
        });
    });
});




module.exports = router;