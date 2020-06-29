const Users = require('./user_model');
const express = require("express");
const router = express.Router();


// GET /api/users/ - Endpoint✅
router.get('/', (req, res) => {
    Users.find()
    .then(user => {
        res.status(200).json(user);
    })
    .catch(error => {
        res.status(500).json({ message: 'No users found'}, error);
    })
});

// GET /api/users/:id - Endpoint ✅
router.get('/:id', (req, res) => {
    Users.findById(req.params.id)
    .then(id => {
        id ? res.status(200).json(id) : res.status(404).json({ message: 'No user with that ID'});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed to get user' });
      });
})
module.exports = router;