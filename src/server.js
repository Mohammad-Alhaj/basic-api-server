"use strict"; // to use javascript in strict mode

require('dotenv').config();
const PORT = process.env.PORT || 3001;
const express = require("express");
const app = express();
const errorserver = require('./ error-handlers/ 500')
const errorpage = require("./ error-handlers/ 404")
const clothesRouters = require('../src/routes/clothes')
const FoodRouters = require("../src/routes/food")


// app.get('/',(req,res)=>{
//     res.send('Helo my name is mohammad ')
// });





app.use(express.json());
app.use(clothesRouters)
app.use(FoodRouters)
app.use('*',errorpage)
app.use(errorserver)
function start(PORT) {
    app.listen(PORT, () => {
        console.log(`Listen and Running on port ${PORT}`);
    });
}

module.exports = {
    app: app,
    start: start,
};