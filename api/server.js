const express = require("express");
const cors = require('cors');
const helmet = require('helmet');

const Users = require('../users/user_router');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json())
server.use('/api/users', Users);



server.get('/', (req,res)=> {
    res.status(200).json({message: "Welcome To Hash-n-bet API!"})
});

module.exports = server;