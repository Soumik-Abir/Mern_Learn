import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:String,
    mobile:Number,
    image:String
})

const User = mongoose.model('nsec', userSchema);

export default User