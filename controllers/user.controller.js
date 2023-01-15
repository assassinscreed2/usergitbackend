const axios = require('axios')

async function getUserDetails(req,res){
    const userid = req.params.userid
    try{
        const userData = await axios.get(`https://api.github.com/users/${userid}`)
        const reposData = await axios.get(`https://api.github.com/users/${userid}/repos`)
        return res.json({...userData.data,repositories:reposData.data})
    }catch(e){
        return res.json({error:e})
    }
}

module.exports = {
    getUserDetails
}