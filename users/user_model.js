const db = require('../data/dbConfig');

module.exports = {
    add,
    find, 
    findBy, 
    findById,
};

function find() {
    return db('users').select('id', 'username')
}
