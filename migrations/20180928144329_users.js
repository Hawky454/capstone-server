exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function (table){
      table.increments();
      table.string('email').unique().notNullable();
      table.string('username')
      table.string('password').notNullable();
      table.string('password2');
      table.string('address');
      table.string('city');
      table.string('state');
      table.integer('zip');
      table.datetime('date');
      table.boolean('isActive').notNullable().defaultTo(true);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  };
  