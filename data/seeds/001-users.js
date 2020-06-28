
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'testuser', password: 'password1', name: "Nicholas", followers: 0, following: 2, money_bankRoll: 5, kudos_bankRoll: 2, bet_Type: 'Cash'},
        { id: 2, username: 'frank', password: 'password2', name: "FrankMoney", followers: 1, following: 1, money_bankRoll: 1, kudos_bankRoll: 3, bet_Type: 'Cash'},
        { id: 3, username: '03User', password: 'password3', name: "03User", followers: 1, following: 0, money_bankRoll: 4, kudos_bankRoll: 2, bet_Type: 'Kudos'}
      ]);
    });
};
