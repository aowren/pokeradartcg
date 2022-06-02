import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import './cards.css';
import * as AiIcons from 'react-icons/ai'; 
import * as CgIcons from 'react-icons/cg';

import PriceComponent from '../price_components/PriceComponent';

import { addFavorite, addToFavorites, getFavorites, removeFavorite, removeFromFavorites } from '../../store/favoritesSlice';
//const Cards = ({ data: { name, set, set: { id }, rarity, images, images: { small } }}) => {

// create button components so we can wrap the card div in <Link /> to route the details page


export default function Cards({ cards }) {

    const dispatch = useDispatch();
    
    const {isFavorite} = useSelector((state) => state.favorites)

    const addFavorite = () => {

        const cardID = cards.id
        
        // if (isFavorite) {
        //     dispatch(removeFromFavorites(cardID))
        // } else {
        //     dispatch(addToFavorites(cardID))
        // }

       dispatch(addToFavorites(cardID))
       dispatch(getFavorites())
    }

    const deleteFav = () => {
        //const cardID = cards.id
        dispatch(removeFromFavorites(cards.id))
        
    }
    
    const addToCollection = () => {

    }

    const handleStyles = () => {
         
        if (isFavorite) return 'red';
        //console.log(cards.id)
    }

    
    // if (cards.set.id.includes('mcd')) {
    //     return null
    // } 
    

    return (
                // <Link to={`/details/${cards.id}`} state={cards} style={{ textDecoration: 'none' }} activeStyle={{ color: 'none' }}> 
            <div className='card-container' >
                    
                <div className='card-container-left'>

                <Link to={`/details/${cards.id}`} style={{ textDecoration: 'none' }} activeStyle={{ color: 'none' }}>

                    <div className='card-title'> 
                        <h3>{cards.name}</h3>
                    </div>
                    <div className='card-body'>
                        <ul>
                            <li>{cards.set.name}</li>
                            <li>{cards.rarity}</li>
                            <li className='makret-price'> Market Price <br /></li>
                            <li className='market-price-subheading'><PriceComponent cards={cards}/></li>   
                        </ul>  
                    </div>
                    </Link>
                    <div className='btn'>
                        <button className='favorite-btn' title='Add to Favorites' onClick={addFavorite} style={{color: handleStyles(cards.isFavorite) }}>
                            <AiIcons.AiFillHeart />
                        </button>
                        <button className='collection-btn' title='Add to Collection' onClick={deleteFav}>
                            <CgIcons.CgPokemon />
                        </button>
                    </div>       
                </div> 
                <Link to={`/details/${cards.id}`} state={cards} style={{ textDecoration: 'none', justifyContent: 'center', display: 'flex' }} activeStyle={{ color: 'none' }}> 
                <div className='card-container-right'>
                    <div className='image-container'>
                        <img src={cards.images.small} alt="pokemon card"></img>
                    </div>
                </div>
                </Link>
        </div>
    )
} 



/*export default function Cards({ cards }) {

    console.log(cards);
    return (
        <div className='card-container'>
            <div className='card-container-left'>
                <div className='card-title'> 
                    <h3>{cards.name}</h3>
                </div>
                <div className='card-body'>
                    <ul>
                        <li>{cards.set.name}</li>
                        <li>{cards.rarity}</li>
                        <li className='makret-price'> Market Price <br /></li>
                        <li className='makret-price-subheading'><span>{cards.tcgplayer.prices.normal?.market ? ` $ ${cards.tcgplayer.prices.normal.market} Normal` : ''}</span></li>
                        <li className='makret-price-subheading'><span>{cards.tcgplayer.prices.reverseHolofoil?.market ? `$ ${cards.tcgplayer.prices.reverseHolofoil.market} Reverse Holofoil` : ''}</span></li>
                        <li className='makret-price-subheading'><span>{cards.tcgplayer.prices.holofoil?.market ? `$ ${cards.tcgplayer.prices.holofoil.market} \n\ Holofoil` : ''}</span></li>
                        <li className='makret-price-subheading'><span>{cards.tcgplayer.prices['1stEditionHolofoil']?.market ? `$ ${cards.tcgplayer.prices['1stEditionHolofoil'].market} 1st Edition Holofoil` : ''}</span></li> 
                        <li className='makret-price-subheading'><span>{cards.tcgplayer.prices['1stEditionNormal']?.market ? `$ ${cards.tcgplayer.prices['1stEditionNormal'].market} 1st Edition Normal` : ''}</span></li> 
                        <li className='makret-price-subheading'><span>{cards.tcgplayer.prices.unlimitedHolfoil?.market ? `$ ${cards.tcgplayer.prices.unlimitedHolfoil.market} Unlimited Holofoil` : ''}</span></li>
                        <li className='makret-price-subheading'><span>{cards.tcgplayer.prices.unlimited?.market ? `$ ${cards.tcgplayer.prices.unlimited.market} Unlimited` : ''}</span></li>
                        <li className='makret-price-subheading'><span>{cards.tcgplayer?.url ? `Price Data Not Available` : `Price Data Not Available`}</span></li>
                        <li className='makret-price-subheading'><span>{cards.tcgplayer?. ? `Price Data Not Available` : `Price Data Not Available`}</span></li>
                    </ul>
                </div>
                <div className='btn'>
                    <button className='favorite-btn' title='Add to Favorites'>
                        <AiIcons.AiFillHeart />
                    </button>
                    <button className='collection-btn' title='Add to Collection'>
                        <CgIcons.CgPokemon />
                    </button>
                </div>
            </div> 
            <div className='card-container-right'>
                <div className='image-container'>
                    <img src={cards.images.small} alt="pokemon card"></img>
                </div>
              
            </div>
        </div>
    )
} */



























































    /*
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [result, setData] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url:'http://localhost:5000/pokemonApi'
        })
        .then(res => {
            setData(res);
            setIsLoaded(true);
            console.log(res);
        },
        (error) => {
            setError(error)
        });
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className='card-container'>
                <div className='card-container-left'>
                    <div className='card-title'> 
                        <h3>{result.data.name}</h3>
                    </div>
                    <div className='card-body'>
                        <ul>
                            <li>{result.data.set.name}</li>
                            <li>{result.data.rarity}</li>
                            <li className='makret-price'> Market Price <br /> <span>${result.data.tcgplayer.prices.holofoil.market}</span></li>
                        </ul>
                    </div>
                    <div className='btn'>
                        <button className='favorite-btn' title='Add to Favorites'>
                            <AiIcons.AiFillHeart />
                        </button>
                        <button className='collection-btn' title='Add to Collection'>
                            <CgIcons.CgPokemon />
                        </button>
                    </div>
                </div> 
                <div className='card-container-right'>
                    <div className='image-container'>
                        <img src={result.data.images.small} alt="pokemon card"></img>
                    </div>
                  
                </div>  
            </div>
        )
    }
    */
