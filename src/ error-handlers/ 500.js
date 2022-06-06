'use strict';



module.exports = ((err,req,res,next)=>{
    res.status(500).send(
        {
            code:500,
            masseg:`the server error come form ${err}`


        }
    )
});
