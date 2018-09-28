//cellared pipe tobacco table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cellar', function(table) {
      table.increments();
      table.string('image');
      table.string('brand');
      table.string('blend');
      table.float('weight', 2, 1);
      table.date('purchased');
      table.float('age', 2, 1);
      table.integer('price');
      table.boolean('available').notNullable().defaultTo(false);
      table.string('source');
      table.float('rating', 2, 1);
  
    });
  };
  
  
  
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cellar');
  };
  