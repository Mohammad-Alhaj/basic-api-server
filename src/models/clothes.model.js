'use strict';



const Clothes= (sequelize, DataTypes) =>
sequelize.define("clothes",{
    color:{
        type: DataTypes.STRING,
        allowNull: false,
        },


});

module.exports = Clothes ;