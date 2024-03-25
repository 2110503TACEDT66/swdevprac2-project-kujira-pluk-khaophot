const mongoose =require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type:String,
        required:[true,`Please add a name`]
    },
    email:{
        type:String,
        required:[true,'Please add a email'],
        unique: true,
        match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please add a valid email'
        ]
    },
    password : {
        type :String,
        required : [true,'Please add a password'],
        minlength:6,
        select : false
    },
    tel: {
        type:String,
        required : [true,'Please add a telephone number']
    },
    role : {
        type:String,
        enum:['user','admin'],
        default: 'user'
    },
    
    resetPasswordToken: String,
    resetPasswordExpire:Date,
    createAt:{
        type:Date,
        dafault:Date.now
    }
    
});

const User = mongoose.models.User || mongoose.model("User", UserSchema)
  export default User