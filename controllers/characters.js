const CharacterDB = require('../models/Character')

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
        try {
            await CharacterDB.remove({ _id: req.params.id });
            console.log("Deleted Character");
            res.redirect('/characters');
        } catch (err) {
            res.redirect('/characters')
        }
    }
}

//need to add copyCharacter , editCharName