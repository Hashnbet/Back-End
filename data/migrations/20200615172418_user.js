
exports.up = function(knex, Promise) {
   return knex.schema.createTable('users', user => {
    user.increments().primary();
    user.string('username', 128).unique().notNullable();
    user.string('password', 128).notNullable();
    user.string('name', 255).notNullable();
    user.integer('money_bankRoll');//Float
    user.integer('kudos_bankRoll');
    user.string('bet_Type', 128).notNullable();
   })
   .createTable('following', tbl => {
    tbl.increments().primary();
    tbl.integer('user_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    tbl.integer('following_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
   })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('following')
  .dropTableIfExists('users');
};
