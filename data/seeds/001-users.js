
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'testuser', password: 'password', bio: "I am the first user in the database!"},
        {id: 2, username: 'frank', password: 'password2', bio: "I am the Second user"},
        {id: 3, username: 'newUser', password: 'password3', bio: "I am user"}
      ]);
    });
};
