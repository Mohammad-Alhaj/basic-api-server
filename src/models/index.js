'use strict';
require('dotenv').config();
// const food = require('./ food');


const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
const { Sequelize, DataTypes } = require("sequelize");
const clothes = require('./clothes.model');
const food = require("./ food")

let sequelizeOptions =
    process.env.NODE_ENV === "production"
        ? {
            dialect: 'postgres',
            protocol: 'postgres',
            dialectOptions: {
                ssl: true,
                native: true
            }
        } : {};


let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);


module.exports = {
    db:sequelize,
    // Food:food(sequelize, DataTypes),
    Clothes:clothes(sequelize, DataTypes),
    Food:food(sequelize,DataTypes)

};

