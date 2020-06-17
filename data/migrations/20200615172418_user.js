
exports.up = function(knex, Promise) {
   return knex.schema.createTable('users', user => {
    user.increments().primary();
    user.string('username', 128).unique().notNullable();
    user.string('password', 128).notNullable();
    user.string('bio', 255).notNullable();
   })
   .createTable('friends', friend => {
    friend.increments().primary();
    friend.string('username')
   })
   .createTable('friendships', bridge => {
    bridge.increments('friendship_id').primary();
    bridge.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    bridge.integer('friend_id')
    .unsigned()
    .references('id')
    .inTable('friends')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
   });
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('friendships')
  .dropTableIfExists('friends')
  .dropTableIfExists('users');
};
