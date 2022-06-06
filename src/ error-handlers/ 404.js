'use strict';

const server = require('../server');
 
module.exports =((req,res,next)=>{

    res.status(404).send({
        code:404,
        message:'The page not found'
    });
});