'use strict';

const server = require('../server');
 
module.exports =((req,res,next)=>{

    res.status(404).send({
        code:404,
        messag:'The page not found'
    });
});