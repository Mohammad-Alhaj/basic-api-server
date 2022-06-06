# basic-api-server
- first, we need to download some of the packages
 `npm init -y` 

 `npm i express jest nodemon pg dotenv`

 `npm i sequelize`

 `npm i sqlite3`

 `npm i supertest`

 - we need to edit and add some lines inside the script in package.json

 ```
 "scripts": {
    "test": "NODE_ENV=test jest --coverage --verbose",
    "dev": "NODE_ENV=development nodemon index.js",
    "start": "NODE_ENV=production node index.js"
  },
 ```
 
  - After start, the server we need to create models inside models we have food and clothes
  let me give an example food model we create inside food table 

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

we should tack care about the *type* it must be lowercase 

and after creat the table we organize our model in side index

I created a database and sequelizeand we should import it in side outer index

after that, we should import the index in side router and hear we create the router

and after finish, we should import in side server.js .

- findAll  (  ) to get all records
- findOne  (  ) to get one records with put the id in side url
- update  (  ) to update the records with id
- destroy  (  ) to delete the records with id

## some issues 
Everything it works but when I am trying to deploy in Heroku it's given me an error
the errors because I didn't ad Postgres in heroku

1- go-to app>>>>Resources>>>>>>>>>Add-ons>>>>> write 
Heroku Postgres <<<<added>>>>

2- when i am try run npm start given me a module it's not found and give an error in index.js
the error because the name of index with space as this " index" correct "index"


3- I was writing this line of code actually I am copying it from the demo

```
let sequelizeOptions =
//     process.env.NODE_ENV === "production"
//         ? {
//             dialect: 'postgres',
//             protocol: 'postgres',
//             dialectOptions: {
//                 ssl: true,
//                 native: true
//             }
//         } : {};
```

but when I am rais the ticket the TA tell me to change it to :
```
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  } : {};
```
*And it's wrok!

* take care about the { } when we send the variable as a object we should import in side the { }

 ### URL

 []()
 []()
 []()
