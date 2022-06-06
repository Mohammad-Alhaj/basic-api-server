"use strict";
const express = require("express");


// const Food = require('../models/index');
const { Clothes } = require("../models/index.js");

const clothesRouter = express.Router();
//add routes
clothesRouter.get("/clothes", getClothes);
clothesRouter.post("/clothes", createClothoes);
clothesRouter.get("/clothes/:id",getOneRecord)
clothesRouter.put("/clothes/:id",updateClothes)
clothesRouter.delete("/clothes/:id",deleteClothes)





async function getClothes(req, res) {
  //  console.log(Clothes);

  const allClothes = await Clothes.findAll();
  res.status(200).json(allClothes);
}

async function createClothoes(req, res) {
 const newClothoes = req.body
    const createClothoes = await Clothes.create(newClothoes)
    res.status(201).json(createClothoes)
}
async function getOneRecord(req,res) {
    let ID = parseInt(req.params.id);
const getOne = await Clothes. findOne({where:{id:ID}} )
res.status(200).json(getOne)
    
}
 

async function updateClothes(req,res) {
    let ID = parseInt(req.params.id);
    const newUpdate = req.body
    const found = await  Clothes.findOne({where:{id:ID}})
 if (found) {
    let updates = await found.update(newUpdate)
    res.status(201).json(updates)
 }else{
    res.status(404).send("can't find the user or id please enter correct id !")
 }
   
}
async function deleteClothes(req,res) {
    let ID = parseInt(req.params.id)
    const deletes = await Clothes .destroy({where:{id:ID}})
    res.status(204).json(deletes)
}
module.exports = clothesRouter;
