import UsersModel from '../models/users.model.js';
import asyncHandler from 'express-async-handler'

export const getFavorites = asyncHandler(async (req, res) => {

    const user = await UsersModel.findById(req.user)

    //Check for user
     if (!user) {
         res.status(401)
         throw new Error('User not found')
    }
   
   try {
        res.status(200).json(req.user.favorites)   
   } catch (error) {
        res.status(401)

        throw new Error('Favorites not found')
   }    

}); 

export const addToFavorites = asyncHandler(async (req, res) => {
    
    const user = await UsersModel.findById(req.user)

   // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    
    const card = req.body.data

    console.log(card)

    try {
        await UsersModel.findOneAndUpdate(
            { _id: req.user.id },
            { $push: { favorites: card }}
        )

    } catch (error) {
        res.status(409).json({message: error.message})
    }
})

export const removeFromFavorites = asyncHandler(async (req, res) => {

    const user = await UsersModel.findById(req.user)

    console.log(user)

    const cardID = req.params.id
    console.log(cardID)

    //Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const favoritesArray = await UsersModel.find({favorites: req.user.favorites})

    try {
        await UsersModel.updateOne(
            { _id: req.user.id },
            { $pull: { favorites: { id: cardID}}})
            res.status(200).json(favoritesArray);

    } catch (error) {
        res.status(409).json({message: error.message})

    } 

})