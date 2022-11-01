const Inventory = require('../models/Inventory')
const CharacterDB = require('../models/Character')

module.exports = {
    getHomebrews: async (req,res) => {
        try{
            const hbItems = await Inventory.find({public:true})
            res.render('homebrews.ejs', items = hbItems)
        }catch(err){
            console.log(err)
        }
    }
}