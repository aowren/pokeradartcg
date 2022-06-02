import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const favoritesSchema = new Schema({

   /* user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    }, */



    //This is the one that works on the backend
    // cardID: {
    //     type: String,
    //     //ref: 'users'
    // } 

    cardID: {
        type: mongoose.Types.ObjectId,
    }
});

const FavoritesModel = mongoose.model('favorites', favoritesSchema);

export default FavoritesModel;

