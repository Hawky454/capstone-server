const express = require('express');

const router = express.Router();

const queries = require('../database/queries');

router.get('/', (req, res) => {
    queries.getAll().then(cellar => {
        res.json(cellar);
        console.log(cellar);
    });
});




module.exports = router;