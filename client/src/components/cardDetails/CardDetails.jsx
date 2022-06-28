import React from "react";

import './card_details.css';
import DetailsPriceComponent from "../price_components/DetailsPriceComponent";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";




const CardDetails = () => { 

   const { cardID } = useParams();

   const cardData  = useSelector((state) => state.cardData.cardData.find(card => card.id === cardID));

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

                {/* <div className='details-btn'>
                        <button className='details-favorite-btn' title='Add to Favorites' onClick={addFavorite}>
                            <AiIcons.AiFillHeart />
                        </button>
                        <button className='details-collection-btn' title='Add to Collection'>
                            <CgIcons.CgPokemon />
                        </button>
                    </div> */}
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
