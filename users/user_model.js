const db = require('../data/dbConfig');

module.exports = {
    add,
    find, 
    findById,
    getFollowers,
    getFollowing,
    remove,
    update
};


function add(user) {
    return db('users')
    .insert(user, 'id')
    .then(ids => {const [id]=ids; return findById(id);
    })
}

function find() {
    return db('users')
    .select(
        'users.id as user_id',
        'username',
        'password',
        'name',
        'followers',
        'following',
        'money_bankRoll',
        'kudos_bankRoll',
        'bet_Type')
}

function findById(id) {
    return db('users')
    .select(
        'users.id',
        'username',
        'password',
        'name',
        'money_bankRoll',
        'kudos_bankRoll',
        'bet_Type')
    .where('users.id', id)
    .first();
}

function getFollowers(user_id) {
    return db('followers').select('users.id', 'users.name').join('users', 'users.id', 'followers.follower_id').where({ user_id })
}

function getFollowing(follower_id) {
    return db('followers').select('users.id', 'users.name').join('users', 'users.id', 'followers.user_id').where({ follower_id })
}

function remove(id) {
    return db('users')
        .where({ id })
        .del();
}

function update(changes, id) {
    return db('users')
        .where({ id })
        .update(changes)
        .then(count => findById(id));
}
