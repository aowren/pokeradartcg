import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const collectionSchema = new Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'users',
        },

    cardID: {
        type: String
    }
});

const CollectionModel = mongoose.model('collection', collectionSchema, 'collection');

export default CollectionModel;
