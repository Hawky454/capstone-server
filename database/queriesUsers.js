const knex = require('./knex'); // the connection!


module.exports = {
    getAll() {
        return knex('users');
    },
    create(users) {
        return knex('users').insert(users, '*');
    },
   getOne(id) {
       return knex('users').where('id', id).first();
   },
    delete(id) {
        return knex('users').where('id', id).del();
    }
}