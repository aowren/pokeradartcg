import express from 'express';

import { getCollection, addToCollection, removeFromCollection } from '../controllers/collection.js';

const router = express.Router();

router.get('/', getCollection);
router.post('/', addToCollection);
router.delete('/:id', removeFromCollection);

export default router;




























//import auth from '../middleware/auth.js';


/*
router.route('/').get((req, res) => {
    CollectionModel.find()
    .then(collection => res.json(collection))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const cardID = req.body.cardID;

    const newCollection = new CollectionModel({cardID})
    newCollection.save()
    .then(() => res.json('Added to collection!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    CollectionModel.findByIdAndDelete(req.params.id)
    .then(() => res.json('Removed from collection.'))
    .catch(err => res.status(400).json('Error: ' + err));
})
*/



