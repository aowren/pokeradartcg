import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UsersModel from '../models/users.model.js';
import asyncHandler from 'express-async-handler'



// Register User
export const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists
    const userExists = await UsersModel.findOne({email})

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User
    const user = await UsersModel.create({
        username,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// Login User
export const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    const user = await UsersModel.findOne({email})
    console.log(user)

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})


// Get user data
export const getMe = asyncHandler(async (req, res) => {
    
    const { _id, username, email } = await UsersModel.findById(req.user.id)

    res.status(200).json({
        id: _id,
        username,
        email
    })
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

// Delete User
export const deleteUser = async(req, res) => {

    try {
        await UsersModel.findByIdAndDelete(req.user.id)
        //res.json({message: "User deleted successfully!"})
        res.status(200).send('User successfully deleted')
    } catch (error) {
        res.status(500)
        throw new Error('Error while deleting user. Account not deleted.')
    }
}

// Change password
export const changePassword = async(req, res) => {
    
    const { newPassword, currentPassword } = req.body

    //compare current password here
    //const userID = req.user.id

    //const user = await UsersModel.findOne({ _id: userID })

//     await bcrypt.compare(currentPassword, user.password, function(err, res) {
//         if (err) {
//             res.status(400)
//             throw new Error('Incorrect password')
//         } if (res) {

//             const userID = req.user.id
//             const user = await UsersModel.findOne({ _id: userID })
        
//             console.log(newPassword)
//             console.log(currentPassword)
        
//             // Hash password
//             const salt = await bcrypt.genSalt(10)
//             const hashedPassword = await bcrypt.hash(newPassword, salt)
        
//             // Set new password
//             user.password = hashedPassword
            
//             const updatedUser = await user.save()
            
//             if (updatedUser === user) {
//                 res.status(201).json({
//                     _id: user.id,
//                     username: user.username,
//                     email: user.email,
//                     password: hashedPassword,
//                     message: "Password successfully changed!"
//                 })
//             } else {
//                 res.status(400)
//                 throw new Error('Incorrect password')
//             }
        
//         }
//     })
// }
    const userID = req.user.id
    const user = await UsersModel.findOne({ _id: userID })

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(newPassword, salt)

    // Set new password
    user.password = hashedPassword
    
    const updatedUser = await user.save()
    
    if (updatedUser === user) {
        res.status(200).send('Password successfully changed!')
        // res.status(201).json({
        //     _id: user.id,
        //     username: user.username,
        //     email: user.email,
        //     password: hashedPassword,
        //     message: "Password successfully changed!"
        // })
    } else {
        res.status(400)
        throw new Error('Incorrect password')
    }
}


































/*

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await UsersModel.findOne({ email });
        
        if(!existingUser) return res.status(404).json({ message: "User does not exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials " })

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });      // pass .env file into 'test'

        res.status(200).json({ result: existingUser, token })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const signUp = async (req, res) => {
    const { email, password, confirmPassword, username } = req.body;

    try {
        const existingUser = await UsersModel.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "User already exists." });

        if (password != confirmPassword) return res.status(400).json({ message: "Passwords do not match." });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await UsersModel.create({ email, password: hashedPassword, username})

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', {expiresIn: "1h" }); //pass .env file into 'test'

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}
*/