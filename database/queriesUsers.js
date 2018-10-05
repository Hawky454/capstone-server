const knex = require('./knex'); // the connection!


module.exports = {
    getAll() {
        return knex('users');
    },
    create(users) {
        return knex('users').insert(users, '*');
    },
    delete(id) {
        return knex('users').where('id', id).del();
    }
}