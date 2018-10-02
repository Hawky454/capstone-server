const knex = require('./knex'); // the connection!


module.exports = {
    getAll() {
        return knex('cellar');
    },
    create(cellar) {
        return knex('cellar').insert(cellar, '*');
    }
}