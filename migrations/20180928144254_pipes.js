//pipes table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('pipes', function(table) {
      table.increments();
      table.string('image');
      table.string('brand');
      table.string('pipemaker');
      table.integer('year');
      table.float('price', 2, 1);
      table.boolean('smooth').notNullable().defaultTo(false);
      table.boolean('sandblasted').notNullable().defaultTo(false);
      table.string('source');
      table.float('rating', 2, 1);
  
    });
  };
  
  
  
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pipes');
  };
  