// import UsersModel from '../models/users.model.js';
// import asyncHandler from 'express-async-handler'

// export const getCollection = asyncHandler(async (req, res) => {

//     const user = await UsersModel.findById(req.user)

//     //Check for user
//      if (!user) {
//          res.status(401)
//          throw new Error('User not found')
//     }
   
//    try {
//         res.status(200).json(req.user.collected)   
//    } catch (error) {
//         res.status(401)
//         throw new Error('Collected card not found')
//    }    

// }); 

// export const addToCollection = asyncHandler(async (req, res) => {
    
//     const user = await UsersModel.findById(req.user)

//    // Check for user
//     if (!user) {
//         res.status(401)
//         throw new Error('User not found')
//     }
    
//     const card = req.body.data

//     console.log(card)

//     try {
//         await UsersModel.findOneAndUpdate(
//             { _id: req.user.id },
//             { $push: { collected: card }}
//         )

//     } catch (error) {
//         res.status(409).json({message: error.message})
//     }
// })

// export const removeFromCollection = asyncHandler(async (req, res) => {

//     const user = await UsersModel.findById(req.user)

//     console.log(user)

//     const cardID = req.params.id
//     console.log(cardID)

//     //Check for user
//     if (!user) {
//         res.status(401)
//         throw new Error('User not found')
//     }

//     const collectionArray = await UsersModel.find({collected: req.user.collected})

//     try {
//         await UsersModel.updateOne(
//             { _id: req.user.id },
//             { $pull: { collected: { id: cardID}}})
//             res.status(200).json(collectionArray);

//     } catch (error) {
//         res.status(409).json({message: error.message})

//     }
// })
