import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { getFavorites, addToFavorites, removeFromFavorites } from '../controllers/favorites.js'; // removeFromFavorites

const router = express.Router();

// router.get('/', protect, getFavorites)
// router.post('/', protect, addToFavorites)
// router.delete('/:id', protect, removeFromFavorites)


export default router;



































/*
router.route('/').get((req, res) => {
    FavoritesModel.find()
    .then(favorites => res.json(favorites))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const cardID = req.body.cardID;

    const newFavorite = new FavoritesModel({cardID})
    newFavorite.save()
    .then(() => res.json('Favorite added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    FavoritesModel.findByIdAndDelete(req.params.id)
    .then(() => res.json('Removed from favorites.'))
    .catch(err => res.status(400).json('Error: ' + err));
})
*/