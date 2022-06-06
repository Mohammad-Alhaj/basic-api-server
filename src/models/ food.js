'use strict';



const Food= (sequelize, DataTypes) =>
sequelize.define('food',{
    food:{
        type: DataTypes.STRING,
        allowNull:false,
        },


})
 
module.exports=Food;