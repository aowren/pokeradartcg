import mongoose from 'mongoose';

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
    /*id: {
        type: String
    }, */
},
{
    timestamps: true
});

const UsersModel = mongoose.model("users", userSchema);

export default UsersModel;