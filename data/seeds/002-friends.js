
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {id: 1, username: 'user2'},
        {id: 2, username: 'user3'},
        {id: 3, username: 'user4'},
      ]);
    });
};
