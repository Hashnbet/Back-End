const Users = require('./user_model');
const express = require("express");
const router = express.Router();


// GET /api/users/ - GET All USERS Endpoint✅
router.get('/', (req, res) => {
    Users.find()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(error => {
            res.status(500).json({ message: 'No users found' }, error);
        })
});

// GET /api/users/:id - GET User by ID Endpoint ✅
router.get('/:id', (req, res) => {
    Users.findById(req.params.id)
        .then(id => {
            id ? res.status(200).json(id) : res.status(404).json({ message: 'No user with that ID' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to get user' });
        });
})

// GET /api/users/:id - GET Users followers Endpoint ✅
router.get('/:id/followers', (req, res) => {
    const { id } = req.params;
    Users.getFollowers(id)
        .then(followers => {
            console.log(followers)


            res.status(200).json(followers);
        }).catch(error => {
            res.status(500).json({ message: 'Error: Failed to get User Followers' })
        })
})

// GET /api/users/:id - GET Users that you are following Endpoint ✅
router.get('/:id/following', (req, res) => {
    const { id } = req.params;
    Users.getFollowing(id)
        .then(following => {
            res.status(200).json(following);
        }).catch(error => {
            res.status(500).json({ message: 'Error: Failed to get User Following' })
        })
})


// PUT /api/users/:id - Update user Endpoint ✅
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    if (
        changes.hasOwnProperty('username') ||
        changes.hasOwnProperty('newPassword') ||
        changes.hasOwnProperty('name') ||
        changes.hasOwnProperty('money_bankRoll') ||
        changes.hasOwnProperty('kudos_bankRoll') ||
        changes.hasOwnProperty('bet_type')
    ) {
        Users.findById(id)
            .then(user => {
                user ? Users.update(changes, id).then(update => {
                    res.status(200).json(update);
                }) : res.status(404).json({ message: 'Could not located user with that ID' })
            })
            .catch(error => {
                res.status(500).json({ message: 'Error: User update failed..' }, error)
            })
    } else {
        res
            .status(400)
            .json({ message: 'Please provide user information to update' });
    }
})

module.exports = router;