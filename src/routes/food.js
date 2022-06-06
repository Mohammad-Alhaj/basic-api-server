'use strict ';
const express = require("express");
const {Food} =require("../models/index");

const foodRouter = express.Router();
//add routes
foodRouter.get("/food", getFood);
foodRouter.post("/food", createFood);
foodRouter.get("/food/:id",getOneRecord)
foodRouter.put("/food/:id",updateFood)
foodRouter.delete("/food/:id",deleteFood)





async function getFood(req, res) {
  //  console.log(Food);

  const allFood = await Food.findAll();
  res.status(200).json(allFood);
}

async function createFood(req, res) {
 const newFood = req.body
    const createFood = await Food.create(newFood)
    res.status(201).json(createFood)
}
async function getOneRecord(req,res) {
    let ID = parseInt(req.params.id);
const getOne = await Food. findOne({where:{id:ID}} )
res.status(200).json(getOne)
    
}
 

async function updateFood(req,res) {
    let ID = parseInt(req.params.id);
    const newUpdate = req.body
    const found = await  Food.findOne({where:{id:ID}})
 if (found) {
    let updates = await found.update(newUpdate)
    res.status(201).json(updates)
 }else{
    res.status(404).send("can't find the user or id please enter correct id !")
 }
   
}
async function deleteFood(req,res) {
    let ID = parseInt(req.params.id)
    const deletes = await Food .destroy({where:{id:ID}})
    res.status(204).json(deletes)
}
module.exports = foodRouter;