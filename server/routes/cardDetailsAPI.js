import express from 'express';
import pokemon from 'pokemontcgsdk';

const router = express.Router();

router.get('/', (req, res) => {
    const cardName = req.query.cards.set.id;
    pokemon.card.find({cardName})
    .then(card => {
        console.log(card.name);
        res.json(card);
    })
})

/*
router.get('/', (req, res) => {
    pokemon.card.find('xy1-1')
    .then(card => {
        console.log(card.name);
        res.json(card);
    })
})
*/


export default router;