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
        //console.log(req)
       // console.log(cards);
        res.send(cards);
    })
}) 


// User Favorites API call
// router.post('/favorites', (req, res) => {
//     const favoritesArray = req.body.data.favoritesData 
//     const returnFavoritesArray = []

//     for (let i = 0; i < favoritesArray.length; i++) {
//         (async function processFavorites() {
//             let result;
//             const promises = [];
            
//             for (let i = 0; i < favoritesArray.length; i++) {
//                 promises.push(pokemon.card.find(favoritesArray[i]));
//             }

//             result = await Promise.all(promises);
//             returnFavoritesArray.push(result[i]);
//         })();
//     }

//     // Promise.all(returnFavoritesArray).then(() => {
//     //     console.log(returnFavoritesArray)
//     //     res.send(returnFavoritesArray)
//     // }).catch(error => {
//     //     console.log(error)
//     // })

//     console.log(returnFavoritesArray);
//     res.send(returnFavoritesArray);
// })


// pokemon.card.find(returnFavoritesArray) 
// .then((cards) => {
//     //console.log(req)
//     console.log(cards)
//     res.send(cards)
// })


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



















