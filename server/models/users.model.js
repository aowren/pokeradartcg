import mongoose from 'mongoose';

//mongoose.set('debug', true);


const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255,
        // unique: true,
    },
    favorites: [Object],
    // favorites: [{
    //     id: String,
    //     name: String,
    //     //supertype: String,
        

    // }],
    collected: [Object]
},
{
    timestamps: true
});

const UsersModel = mongoose.model("users", userSchema, "users");

export default UsersModel;