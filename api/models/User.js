const mongoose = require('mongoose');
const {Schema} = mongoose;


//create Schema
const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: {type: String, unique:true},
    password: String,
});

//use User Schema for the model
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
