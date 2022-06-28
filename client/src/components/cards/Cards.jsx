import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import './cards.css';
import * as AiIcons from 'react-icons/ai'; 

import PriceComponent from '../price_components/PriceComponent';

import { addToFavorites, removeFromFavorites } from '../../store/favoritesSlice';

export default function Cards({ cards }) {

    const {favoritesArray} = useSelector((state) => state.favorites)

    useEffect(() => {

    })


    const dispatch = useDispatch();
    
    const addFavorite = () => {

        const cardID = cards.id
        console.log(cardID)

        if (favoritesArray.includes(cards)) {
            dispatch(removeFromFavorites(cards.id))
            
        } else {
            dispatch(addToFavorites(cards))
            console.log(favoritesArray)
        }
    }

    let buttonColor = {color: 'black'}

    favoritesArray.forEach((card) => {

        if (card.id === cards.id) {
            buttonColor = {color: 'red'}
        }
    })

    return (
            <div className='card-container' >
                <div className='card-container-left'>
                <Link to={`/details/${cards.id}`} style={{ textDecoration: 'none' }} activestyle={{ color: 'none' }}>

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
                        <button className='favorite-btn' title='Add to Favorites' onClick={addFavorite} style={buttonColor}>
                            <AiIcons.AiFillHeart />
                        </button>
                        {/* <button className='collection-btn' title='Add to Collection' onClick={addToCollection}>
                            <CgIcons.CgPokemon />
                        </button> */}
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





























