exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function (table){
      table.increments();
      table.string('email');
      table.string('username').notNullable();
      table.string('password');
      table.string('password2');
      table.string('address');
      table.string('city');
      table.string('state');
      table.integer('zip');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  };
  