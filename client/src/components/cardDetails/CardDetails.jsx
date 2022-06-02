import React from "react";
//import './CardDetails';

import './card_details.css';
import DetailsPriceComponent from "../price_components/DetailsPriceComponent";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import * as AiIcons from 'react-icons/ai'; 
import * as CgIcons from 'react-icons/cg';


const CardDetails = () => { 

   const { cardID } = useParams();

   const cardData  = useSelector((state) => state.cardData.cardData.find(card => card.id === cardID)); // cardData from reducer

   console.log({cardData});
   console.log({cardID});

    return (
   
        <div className="card-details-container">
            <div className="card-details-container-left">
                <div className="card-description">
                    <h3>{cardData.name}</h3>
                    <ul>
                        <li>{cardData.set.name} ({cardData.id})</li>
                        <li>{cardData.rarity}</li>
                    </ul>
                    <ul className="release-date">
                        <li>Release Date</li>
                        <li>{cardData.set.releaseDate}</li>
                    </ul>
                </div>
                <div className="market-data">
                    <li>Market Price</li>
                    <DetailsPriceComponent cardData={cardData}/>
                    <ul>
                        <li>{cardData.tcgplayer.prices.market}</li>
                        <li className="last-updated">Last Updated</li>
                    <li className="last-updated">{cardData.tcgplayer.updatedAt}</li>
                    </ul>
                </div>

                <div className='details-btn'>
                        <button className='details-favorite-btn' title='Add to Favorites'>
                            <AiIcons.AiFillHeart />
                        </button>
                        <button className='details-collection-btn' title='Add to Collection'>
                            <CgIcons.CgPokemon />
                        </button>
                    </div>
            </div>       
        
            <div className="card-details-container-right">
                <div className="large-image-container">
                <img src={cardData.images.large} alt="pokemon card"></img>
                </div>
            </div>
        </div>
        );
    };

    export default CardDetails;











    /*
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [card, setCard] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url:`http://localhost:5000/cardDetailsApi?cardName=${cards}`
        })
        .then(res => {
            setCard(res.data);
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
        <div className="card-details-container">
            <div className="card-details-container-left">
                <div className="card-description">
                    <h3>{card.name}</h3>
                    <ul>
                        <li>{card.set.name} ({card.id})</li>
                        <li>{card.rarity}</li>
                    </ul>
                    <ul className="release-date">
                        <li>Release Date</li>
                        <li>{card.set.releaseDate}</li>
                    </ul>
                </div>
                <div className="market-data">
                    <li>Market Price</li>
                    <DetailsPriceComponent card={card}/>
                    <ul>
                        <li>{card.tcgplayer.prices.market}</li>
                        <li className="last-updated">Last Updated</li>
                    <li className="last-updated">{card.tcgplayer.updatedAt}</li>
                    </ul>
                </div>

                <div className='details-btn'>
                        <button className='details-favorite-btn' title='Add to Favorites'>
                            <AiIcons.AiFillHeart />
                        </button>
                        <button className='details-collection-btn' title='Add to Collection'>
                            <CgIcons.CgPokemon />
                        </button>
                    </div>
            </div>       
        
            <div className="card-details-container-right">
                <div className="large-image-container">
                <img src={card.images.large} alt="pokemon card"></img>
                </div>
            </div>
        </div>
        );
    };
    
}
*/
/*

<div className="card-details-container">
            <div className="card-details-container-left">
                <div className="card-description">
                    <h3>{cards.name}</h3>
                    <ul>
                        <li>{cards.set.name} ({cards.id})</li>
                        <li>{cards.rarity}</li>
                    </ul>
                    <ul className="release-date">
                        <li>Release Date</li>
                        <li>{cards.set.releaseDate}</li>
                    </ul>
                </div>
                <div className="market-data">
                    <li>Market Price</li>
                    { <DetailsPriceComponent cards={cards}/> }
                    <ul>
                        <li>{cards.tcgplayer.prices.market}</li>
                        <li className="last-updated">Last Updated</li>
                    <li className="last-updated">{cards.tcgplayer.updatedAt}</li>
                    </ul>
                </div>

                <div className='details-btn'>
                        <button className='details-favorite-btn' title='Add to Favorites'>
                            <AiIcons.AiFillHeart />
                        </button>
                        <button className='details-collection-btn' title='Add to Collection'>
                            <CgIcons.CgPokemon />
                        </button>
                    </div>
            </div>       
        
            <div className="card-details-container-right">
                <div className="large-image-container">
                <img src={cards.images.large} alt="pokemon card"></img>
                </div>
            </div>
        </div>
        );
        */

