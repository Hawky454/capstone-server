const express = require('express');

const router = express.Router();

const queries = require('../database/queries');

router.get('/', (req, res) => {
    queries.getAll().then(pipes => {
        res.json(pipes);
    });
});




module.exports = router;