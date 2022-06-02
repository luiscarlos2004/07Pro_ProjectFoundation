const getUsers = (req,res)=>{
    res.send('cargamos algo');
}
const postUsers = (req,res)=>{
    console.log(req.body)
    res.send(true)
}


module.exports = {
    getUsers,
    postUsers
}