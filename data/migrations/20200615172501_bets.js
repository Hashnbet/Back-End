
exports.up = function(knex) {
  return knex.schema.createTable('bet', tbl => {
      tbl.increments();
      tbl.string('bet title', 255),notNullable();
  })
};

exports.down = function(knex) {
  
};
