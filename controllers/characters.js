const Inventory = require('../models/Inventory')
const CharacterDB = require('../models/Character')
const { ObjectID } = require('mongodb')

module.exports = {
    getCharacters: async (req,res)=>{
        try{
            const characters = await CharacterDB.find({userId:req.user.id})
            res.render('characters.ejs', {characters: characters, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createCharacter: async (req, res)=>{
        try{
            await CharacterDB.create({characterName: req.body.characterName, strScore: req.body.strScore, userId: req.user.id})
            console.log('New Character Created!')
            res.redirect('/characters')    
        }catch(err){
            console.log(err)
        }
    },
    deleteCharacter: async (req, res)=>{
        console.log(req.body.charIdFromJSFile)
        try {
            await CharacterDB.findOneAndDelete({_id:req.body.charIdFromJSFile});
            console.log("Deleted Character");
            await Inventory.deleteMany({charId:req.body.charIdFromJSFile});
            console.log("Deleted Character Inventory")
            res.redirect('/characters');
        } catch (err) {
            res.redirect('/characters')
        }
    }
}

//need to add copyCharacter , editCharName