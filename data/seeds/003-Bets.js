
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bet_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('bet_table').insert([
        {id: 1, user_1_id: 1, user_2_id: 2, bet_title: 'I was right', bet_amount: 2000, bet_created: Date.now(), bet_Expires: '18-06-12 10:34:09 PM', bet_type: true, bet_Accepted: false },
        {id: 2, user_1_id: 3, user_2_id: 2, bet_title: 'I was not right', bet_amount: 2000, bet_created: Date.now(), bet_Expires: '18-06-12 10:34:09 PM', bet_type: true, bet_Accepted: true },
      ]);
    });
};
