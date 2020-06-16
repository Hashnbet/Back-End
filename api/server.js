const express = require("express");
const server = express();

server.use(express.json())

server.get('/', (req,res)=> {
    res.status(200).json({message: "Welcome To Hash-n-bet API!"})
});

module.exports = server;