import express from 'express';
import pokemon from 'pokemontcgsdk';


const router = express.Router();


/*
router.get('/', (req, res) => {
    pokemon.card.find('xy1-1')
    .then(card => {
        console.log(card.name);
        res.json(card);
    })
})
*/

/*
router.get('/', (req, res) => {
    pokemon.card.all({ q: 'name:blastoise' })
    .then(cards => {
        console.log(cards[0].data);
        res.json(cards[0].data);
    })
})
*/


/*router.get('/', (req, res) => {
    pokemon.card.all({ q: 'name:pidgeot' })
    .then((cards) => {
        console.log(cards); // "Blastoise"
        res.send(cards);
    })
}) */


/*** ACTUAL FUNCTION ***/


router.get('/', (req, res) => {
    const cardName = req.query.searchInput;
    pokemon.card.all({ q:`name:${cardName}` })
    .then((cards) => {
        console.log(req)
        console.log(cards);
        res.send(cards);
    })
}) 

/*** TEST ROUTE ***/

/*router.get('/', (req, res) => {
    pokemon.card.all({ q:'name:blastoise'})
    .then((cards) => {
        //console.log(cards);
        res.send(cards);
    })
})*/

export default router;



























//import { getFavorites, addToFavorites } from '../controllers/favorites.js';

/*
pokemon.card.all()
  .then((cards) => {
      console.log(cards[0].name) // "Blastoise"
})
*/

/*
pokemon.card.where({ pageSize: 50, page: 1 })
  .then(result => {
      console.log(result.data[0].name) // "Blastoise"
})
*/




/*
router.get("/", function(req, res, next) {
    res.send("API is working properly")
})
*/



















