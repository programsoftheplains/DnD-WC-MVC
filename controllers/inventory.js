const Inventory = require('../models/Inventory')

module.exports = {
    getItems: async (req,res)=>{
        console.log(req.user)
        try{
            const inventoryItems = await Inventory.find({userId:req.user.id})
            const itemsLeft = await Inventory.countDocuments({userId:req.user.id,completed: false})
            res.render('inventory.ejs', {inventory: inventoryItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createItem: async (req, res)=>{
        try{
            await Inventory.create({itemName: req.body.itemName, itemNumber: req.body.itemNumber, userId: req.user.id})
            console.log('Item has been added!')
            res.redirect('/inventory')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Inventory.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Inventory.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
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