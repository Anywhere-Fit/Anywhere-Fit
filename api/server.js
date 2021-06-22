const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

const usersRouter = require('./users/users-router')
const classesRouter = require('./classes/classes-router')

server.use("/api/users",usersRouter);
server.use("/api/classes", classesRouter);


//SANITY CHECK ENDPOINT
server.get("/", (req, res, next)=>{
    res.json({
        message: "API Up"
    })
})


//Global Error Handling 
server.use((err, req, res, next)=>{
    res.json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server
