const knex = require('./knex'); // the connection!


module.exports = {
    getAll() {
        return knex('pipes');
    },
    create(pipes) {
        return knex('pipes').insert(pipes, '*');
    }
}