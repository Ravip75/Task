import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    CEO: {type: String},
    director: {type: String},
    manager: {type: String},
    coordinator: {type: String},
    User1: {type: String}
});
const userModel=mongoose.model('User',userSchema);
export default userModel;