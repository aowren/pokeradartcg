import CollectionModel from '../models/collection.model.js';

export const getCollection = async (req, res) => {
    try {
        const collection = await CollectionModel.find();

        console.log(collection)
        
        res.status(200).json(collection)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const addToCollection = async (req, res) => {
    const cardID = req.body.cardID;

    const newCard = new CollectionModel({ cardID } );

    try {
        await newCard.save()
        res.json("Added to collection!")
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const removeFromCollection = async (req, res) => {
    const { cardID } = req.params;

    if (!mongoose.Types.ObjectId.isValid(cardID)) return res.status(404).send(`No card with id: ${cardID}`);

    await CollectionModel.findByIdAndRemove(cardID);

    res.json({ message: "Card removed from collection." });
}










/*
export const removeFromCollection = async (req, res) => {
    CollectionModel.findByIdAndDelete(req.params.id)

    try {
        await 
    } catch (error) {
        res.status(400).json({ message: error.message})
    }

}
*/
