const CharacterDB = require('../models/Character')

module.exports = {
    getCharacters: async (req,res)=>{
        try{
            const characters = await CharacterDB.find({userID:req.user.id})
            res.render('characters.ejs', {characters: characters, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createCharacter: async (req, res)=>{
        try{
            await CharacterDB.create({characterName: req.body.characterName, strScore: req.body.strScore, userID: req.user.id})
            console.log('New Character Created!')
            res.redirect('/characters')    
        }catch(err){
            console.log(err)
        }
    },
    deleteCharacter: async (req, res)=>{
        console.log(req.body.characterIdFromJSFile)
        try{
            await CharacterDB.findOneAndDelete({_id:req.body.characterIdFromJSFile})
            console.log('Deleted Character')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}

//need to add copyCharacter , editCharName