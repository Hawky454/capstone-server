const express = require('express');

const router = express.Router();

const queries = require('../database/queriesUsers');

router.get('/', (req, res) => {
    queries.getAll().then(users => {
        res.json(users);
        console.table(users);
    });
});



module.exports = router;