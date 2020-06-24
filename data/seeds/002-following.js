
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('following').del()
    .then(function () {
      // Inserts seed entries
      return knex('following').insert([
        {id: 1, user_id: 1, following_id: 2},
        {id: 2, user_id: 1 , following_id: 3},
        {id: 3, user_id: 2 , following_id: 3}
      ]);
    });
};
