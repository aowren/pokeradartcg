import express from 'express';
import pokemon from 'pokemontcgsdk';

const router = express.Router();

router.get('/', (req, res) => {
    pokemon.card.all({ q: 'set.name:' })
    .then((cards) => {
        console.log(cards); // "XY"
        res.send(cards);
    })
})

export default router;