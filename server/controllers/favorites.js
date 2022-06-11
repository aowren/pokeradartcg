import UsersModel from '../models/users.model.js';
import asyncHandler from 'express-async-handler'

export const getFavorites = asyncHandler(async (req, res) => {
    // try {
    //     const favorites = await FavoritesModel.find({ user: req.user.id }); // <------

    //     console.log(favorites)
        
    //     res.status(200).json(favorites)
    // } catch (error) {
    //     res.status(404).json({ message: error.message });
    // }

    // const fav = await FavoritesModel.find({id: req.user.id})

    // if (fav.user.toString()  !== req.user.id) {
    //     res.status(401)
    //     throw new Error('User not auuthorized')
    // }

    //const favorites = await FavoritesModel.find({ user: req.user.id }) 
    //res.status(200).json(favorites)

    const user = await UsersModel.findById(req.user)

    //Check for user
     if (!user) {
         res.status(401)
         throw new Error('User not found')
    }
   
   try {
        const favoritesArray = await UsersModel.find({favorites: req.user.favorites})
       // console.log(req.user.favorites)
        res.status(200).json(req.user.favorites)   
   } catch (error) {
        res.status(401)

        throw new Error('Favorites not found')

   }

    //console.log(req.user.favorites)
    

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
   
    // try {
    //     const card = await newCard.save()
    //     console.log(card)
    //     res.json({
    //         message: 'Added to favorites!',
    //         cardID: cardID,
    //     })
    // } catch (error) {
    //     res.status(409).json({ message: error.message });
    // }
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

    // if(!favorites) {
    //     res.status(400)
    //     throw new Error('Card not found in favorites')
    // }

    try {
        await UsersModel.updateOne(
            { _id: req.user.id },
            { $pull: { favorites: { id: cardID}}})

    } catch (error) {
        res.status(409).json({message: error.message})

    } 





















    /*
    //const favorites = await FavoritesModel.find({ cardID: cardID, user: req.user.id });
    //const cardID = req.body.id // this is what worked
    const cardID = req.params.id //this needs to be here for deleteOne to work
    //const user = await UsersModel.findById(req.user.id)
    
    const favorites = await FavoritesModel.findById(req.params.id); // <------- this is what works

    //const {_id: id } = db.collection("favorites").findOne({})

    if(!favorites) {
        res.status(400)
        throw new Error('Card not found in favorites')
    }

 

    // // Make sure logged in user matches the favorites user
    // if (favorites.user.toString() !== req.user.id) {
    //     res.status(401)
    //     throw new Error('User not authorized')
    // }

    await favorites.deleteOne({cardID: cardID})
    //await favorites.deleteOne({cardID})
    //console.log(favorites)
    

    res.status(200).json({ id: req.params.id, message:'Card removed from favorites' }) */

    // Make sure logged in user matches the favorites user

    //  const favorites = await FavoritesModel.findById({id: req.params.id})






    // if (favorites.user.toString() !== req.user.id) { //was favorites.user
    //     res.status(401)
    //     throw new Error('User not authorized')
    // }

    // This removes from favorites, but does not protect against other users
    // try {
    //     await FavoritesModel.findOneAndDelete({id: req.params.id})
    //     //await favorites.deleteOne()
    //    res.status(200).send('Card removed from favorites')
    // } catch (error) {
    //     res.status(500)
    //     throw new Error('Error: Card not removed from favorites.')
    // }
})