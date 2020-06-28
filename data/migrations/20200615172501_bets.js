
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('bet_table', tbl => {
      tbl.increments().primary();
      tbl.integer('user_1_id').references('id').inTable('users');
      tbl.integer('user_2_id').references('id').inTable('users');
      tbl.string('bet_title', 255).notNullable();
      tbl.integer('bet_amount');
      tbl.timestamp('bet_created').defaultTo(knex.fn.now());
      tbl.date('bet_Expires');
      tbl.boolean('bet_Type');
      tbl.boolean('bet_Accepted');
  })
  .createTable('likes', tbl=>{
      tbl.increments();
      tbl.integer('bet_id')
      .unsigned()
      .references('id')
      .inTable('bet_table')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      tbl.integer('user_id')
      .unsigned()
      .references('id').inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
  .createTable('comments', tbl =>{
    tbl.increments();
    tbl.integer('bet_id')
    .unsigned()
    .references('id')
    .inTable('bet_table')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    tbl.integer('commentor_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    tbl.string('comment_text', 255);
    tbl.timestamp('comment_timeStamp');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('comments')
    .dropTableIfExists('likes')
    .dropTableIfExists('bet_table');
};
