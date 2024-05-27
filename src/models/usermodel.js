import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const userData = new mongoose.Schema({
    nomorhp : {
        type : Number,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['Guru','Wali Murid'],
        default : 'Wali Murid'
    },
})

userData.pre('save', async function (next){
    if (!this.isModified('password')){
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch (err) {
        next(err)
    }
})

const User = mongoose.model('User',userData)

export default User