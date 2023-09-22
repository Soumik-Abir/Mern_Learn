import mongoose from "mongoose";


const Connection = async(username, password) =>{
    
    const URL = `mongodb://login_admin:Soumik@ac-eoshjx1-shard-00-00.bvyqmmy.mongodb.net:27017,ac-eoshjx1-shard-00-01.bvyqmmy.mongodb.net:27017,ac-eoshjx1-shard-00-02.bvyqmmy.mongodb.net:27017/?ssl=true&replicaSet=atlas-kw8sa7-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true, });
        console.log("Db Connection Successfully");
    }catch(error){
        console.log('Connection Error with Database', error);
    }
}

export default Connection;