
const createValidator=({body},res,next)=>{
    if(!body)
        return res.status(400).send("No post Data")
    if(!body.name)
        return res.status(400).send("No Name specified for User")
    if(!body.email)
        return res.status(400).send("No Email specified for User")
    if(!body.designation)
        return res.status(400).send("No Designation specified for User")
    if(!body.createdAt)
        return res.status(400).send("No CreatedAt specified for User")
    if(!body.isVerified)
        return res.status(400).send("No isVerified specified for User")

    next();
}
const readValidator=({params},res,next)=>{
    if(!params)
        return res.status(400).send("No Parameter Data")
    if(!params.name)
        return res.status(400).send("No Name specified for User")
    next();
}
const updateValidator=({body},res,next)=>{
    if(!body)
        return res.status(400).send("No post Data")
    if(!body._id)
        return res.status(400).send("No id specified for User")
    if(!body.name)
        return res.status(400).send("No Name specified for User")
    if(!body.email)
        return res.status(400).send("No Email specified for User")
    if(!body.designation)
        return res.status(400).send("No Designation specified for User")
    if(!body.createdAt)
        return res.status(400).send("No CreatedAt specified for User")
    if(!body.isVerified)
        return res.status(400).send("No isVerified specified for User")

    next();
}
module.exports={createValidator,readValidator,updateValidator};