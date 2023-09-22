import mongoose from "mongoose";

const Connection = async (username, password) =>{
    const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.kcr7v.mongodb.net:27017,cluster0-shard-00-01.kcr7v.mongodb.net:27017,cluster0-shard-00-02.kcr7v.mongodb.net:27017/?ssl=true&replicaSet=atlas-f67jje-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true, });
        console.log('Database Successfuly Connected');
    }catch(error){
        console.log('Error While Connecting Database', error);
    }
}

export default Connection