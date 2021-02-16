
const router= require('express').Router();
const profileValidator=require('../utils/profile-validator');
const CreateProfile=require('../data-access/profile/profile-create');
const UpdateProfile=require('../data-access/profile/profile-update');
const {readAllUsers,readUser}=require('../data-access/profile/profile-read');

router.post('/create',profileValidator.createValidator,(req,res)=>{
    CreateProfile(req.body)
    .then((value)=>res.status(200).send(value))
    .catch((reason)=>res.status(400).send(reason))
})

router.get('/read/:name',(req,res)=>{
     readUser({name:req.params.name})
        .then(users=>res.status(200).send(users))
        .catch(error=>res.status(400).send(error))
})

router.get('/read',(req,res)=>{
    readAllUsers()
        .then(users=>res.status(200).send(users))
        .catch(error=>res.status(400).send(error))
})

router.post('/update',profileValidator.updateValidator,(req,res)=>{
    UpdateProfile(req.body)
    .then((value)=>res.status(200).send(value))
    .catch((reason)=>res.status(400).send(reason))
})

router.post('/delete',(req,res)=>{
    
})
module.exports=router;