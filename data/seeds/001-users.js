
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'testuser', password: 'password1', name: "Nicholas", money_bankRoll: 5, kudos_bankRoll: 2, bet_Type: 'Cash'},
        { id: 2, username: 'frank', password: 'password2', name: "FrankMoney", money_bankRoll: 1, kudos_bankRoll: 3, bet_Type: 'Cash'},
        { id: 3, username: '03User', password: 'password3', name: "03User", money_bankRoll: 4, kudos_bankRoll: 2, bet_Type: 'Kudos'}
      ]);
    });
};
