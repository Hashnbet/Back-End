
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('bet', tbl => {
      tbl.increments().primary();
      tbl.string('bet_title', 255).notNullable();
      tbl.integer('bet_amount').notNullable();
      tbl.boolean('bet_likes');
      tbl.string('bet_comments',255);
      tbl.date('bet_ends');
  })
  .createTable('user_bets', tbl=>{
      tbl.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      tbl.integer('friend_id')
      .unsigned().notNullable()
      .references('id').inTable('friends')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      tbl.integer('bet_id')
      .unsigned()
      .references('id')
      .inTable('bet')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('user_bets')
    .dropTableIfExists('bet');
};
