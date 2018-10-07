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
    getOneByEmail(email) {
        return knex('users').where('email', email).first();
    },
    create(user) {
        return knex('users').insert(user, 'id').then(ids => {
            return ids[0];
        });
    },
    delete(id) {
        return knex('users').where('id', id).del();
    }
}