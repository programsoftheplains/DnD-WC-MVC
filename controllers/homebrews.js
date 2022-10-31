//do i need model access?

module.exports = {
    getHomebrews: async (req,res) => {
        try{
            res.render('homebrews.ejs')
        }catch(err){
            console.log(err)
        }
    }
}