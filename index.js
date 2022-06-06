'use strict';
require('dotenv').config();

const PORT = process.env.PORT|| 3001;

const server = require("./src/server")
const { db } = require("./src/models/index");

// we can do this
// const { start } = require('./server');

db.sync()
    .then(() => {
        // start();
        server.start(PORT);
    })
    .catch(console.error);