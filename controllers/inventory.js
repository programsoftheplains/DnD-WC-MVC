const Inventory = require('../models/Inventory')

module.exports = {
    getItems: async (req,res)=>{
        console.log(req.user)
        try{
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
                charId: req.params.cid})
            console.log('Item has been added!')
            res.redirect('/inventory/'+ req.params.cid)
        }catch(err){
            console.log(err)
        }
    },
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