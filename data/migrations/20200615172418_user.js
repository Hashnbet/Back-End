
exports.up = function(knex, Promise) {
   return knex.schema.createTable('users', user => {
    user.increments().primary();
    user.string('username', 128).unique().notNullable();
    user.string('password', 128).notNullable();
    user.string('name', 255).notNullable();
    user.integer('followers').notNullable().defaultTo(0)
    user.integer('following').notNullable().defaultTo(0)
    user.integer('money_bankRoll').defaultTo(0);//Float
    user.integer('kudos_bankRoll').defaultTo(0);
    user.string('bet_Type', 128).notNullable();
   })
   .createTable('followers', tbl => {
    tbl.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    tbl.integer('follower_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    tbl.timestamp('created_at');
   })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('followers')
  .dropTableIfExists('users');
};
