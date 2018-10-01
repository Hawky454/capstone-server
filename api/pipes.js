const express = require('express');

const router = express.Router();

const queries = require('../database/queriesPipes');

router.get('/', (req, res) => {
    queries.getAll().then(pipes => {
        res.json(pipes);
        console.table(pipes);
    });
});




module.exports = router;