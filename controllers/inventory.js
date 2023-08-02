const Inventory = require('../models/Inventory')
const CharacterDB = require('../models/Character')
const { ObjectID } = require('mongodb')

module.exports = {
    getItems: async (req,res)=>{
        console.log(req.user)
        try{
            const character = await CharacterDB.findById(req.params.cid)
            console.log(character.characterName)
            const inventoryItems = await Inventory.find({charId:req.params.cid})
            var totalWeight = 0
            for(i=0;i<inventoryItems.length;i++){
                totalWeight = totalWeight + ((inventoryItems[i].itemWeight)*(inventoryItems[i].itemNumber))
            }
            res.render('inventory.ejs', {charInfo: character, inventory: inventoryItems, user: req.user, charId: req.params.cid, total: totalWeight})
        }catch(err){
            console.log(err)
        }
    },
    createItem: async (req, res)=>{
        try{
            await Inventory.create({
                itemName: req.body.itemName,
                itemNumber: req.body.itemNumber,
                itemWeight: req.body.itemWeight,
                charId: req.params.cid})
            console.log('Item has been added!')
            res.redirect('/inventory/'+ req.params.cid)
        }catch(err){
            console.log(err)
        }
    },
    editItem: async (req, res)=>{
        try{
            await Inventory.findOneAndUpdate(
                { _id: req.params.id },
                {
                    itemNumber: req.body.p1,
                    itemWeight: req.body.p2,
                }            
            );
            console.log('Item Updated')
            res.redirect('/inventory/'+ req.body.cid)
        }catch(err){
            console.log(err)
        }
    },
    //build findItem option to DnD API
    deleteItem: async (req, res)=>{
        console.log(req.body.itemIdFromJSFile)
        try{
            await Inventory.findOneAndDelete({_id:req.body.itemIdFromJSFile})
            console.log('Deleted Item')
            res.json('Deleted Item')
        }catch(err){
            console.log(err)
        }
    }
}    