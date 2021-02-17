//Method to create Build Profile
const buildProfile=({
    name,
    email,
    designation,
    createdAt,
    isVerified    
})=>{
    return {
        name:name,
        email:email,
        designation:designation,
        createdAt:createdAt,
        isVerified:isVerified
    }
}

module.exports=buildProfile;
