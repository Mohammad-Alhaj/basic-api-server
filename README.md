# basic-api-server
- first we need downlod some of package
 `npm init -y` 

 `npm i express jest nodemon pg dotenv`

 `npm i sequelize`

 `npm i sqlite3`

 `npm i supertest`

 - we need edit and add some line inside script in package.json

 ```
 "scripts": {
    "test": "NODE_ENV=test jest --coverage --verbose",
    "dev": "NODE_ENV=development nodemon index.js",
    "start": "NODE_ENV=production node index.js"
  },
 ```
 
  - After start the server we need create models inside models we have food and clothes
  let me give an examp food model we create inside food table 

  ```
  'use strict';



const Food= (sequelize, DataTypes) =>
sequelize.define('food',{
    food:{
        type: DataTypes.STRING,
        allowNull:false,
        },


})
 
module.exports=Food;
```

we should tack a care about the *type* it must be lowercase 

and after creat the table we organize our model in side index

we craet a database and sequlize and we should import it in side outer index

afer that we should imort the index in side rotur and hear we creat roturs 

and after finsh we should imort in side server.js .

- findAll  (  ) to get all recurds
- findOne  (  ) to get one recurds withe put id in side url
- update  (  ) to update the recurds withe id
- destroy  (  ) to delete the recurds withe id


* take a care about the { } when we send the varibel as a object we should imprtn in side the { }

 ### URL

 []()
 []()
 []()
