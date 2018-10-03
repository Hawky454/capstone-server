const knex = require('./knex'); // the connection!


module.exports = {
    getAll() {
        return knex('cellar');
    },
    create(cellar) {
        return knex('cellar').insert(cellar, '*');
    },
    delete(id) {
        return knex('cellar').where('id', id).del();
    }
}