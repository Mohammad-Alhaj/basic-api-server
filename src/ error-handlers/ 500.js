'use strict';



module.exports = ((err,req,res,next)=>{
    res.status(500).send(
        {
            code:500,
            message:`the server error come form ${err}`


        }
    )
});
