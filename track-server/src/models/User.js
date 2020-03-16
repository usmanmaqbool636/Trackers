const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    }
})
UserSchema.pre('save', function (next) {

    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            return next();
        })
    })
})
UserSchema.methods.comparePassword = function (candidatePassword) {
    const user = this;
    return new Promise((resolve, reject)=>{
        bcrypt.compare(candidatePassword,user.password,(err,isMatch)=>{
            console.log(isMatch);
            if(err){
                return reject(err);
            }
            if(!isMatch){
                return reject(false);
            }
            return resolve(true)
        });

    })
}
module.exports = mongoose.model("User", UserSchema);