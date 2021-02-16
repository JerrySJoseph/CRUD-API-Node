const mongoose= require('mongoose');

const DEFAULT_CONN_STRING='mongodb://localhost:27017/crud_api_db'


const ConnectToDb=(connectionString=DEFAULT_CONN_STRING)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true},
            (err)=>{
                if(err)
                  return reject(err)
                return resolve();
            })
    })
}
module.exports={ConnectToDb};