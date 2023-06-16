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
    //build findItem option to DnD API
    deleteItem: async (req, res)=>{
        console.log(req.body.inventoryIdFromJSFile)
        try{
            await Inventory.findOneAndDelete({_id:req.body.inventoryItemFromJSFile})
            console.log('Deleted Item')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    