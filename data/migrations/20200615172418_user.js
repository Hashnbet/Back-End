
exports.up = function(knex, Promise) {
   return knex.schema.createTable('users', user => {
    user.increments();
    user.string('username', 128).unique().notNullable();
    user.string('password', 128).notNullable();
    user
    .string('name', 128)
    .notNullable()
    .unique();
    user.string('bio', 255).notNullable();
    
   });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
