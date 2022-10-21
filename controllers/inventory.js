const Inventory = require('../models/Inventory')
const CharacterDB = require('../models/Character')

module.exports = {
    getItems: async (req,res)=>{
        console.log(req.user)
        try{
            //const character = await CharacterDB.find({_id:req.params.cid}) not working rn, figure out how to fetch character from database with route/cid
            const inventoryItems = await Inventory.find({charId:req.params.cid})
            res.render('inventory.ejs', {inventory: inventoryItems, user: req.user, charId: req.params.cid})
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
            await Inventory.findOneAndDelete({_id:req.body.inventoryIdFromJSFile})
            console.log('Deleted Item')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    