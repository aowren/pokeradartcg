import React from "react";
import './index.css';
import Cards from "../../components/cards/Cards";
import Error from "../../components/error/Error";
import { useEffect, useState } from "react";

import Spinner from '../../components/spinner/Spinner';
import NotSearching from "../../components/not_searching/NotSearching";

import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../store/favoritesSlice";

const MainPage = () => {

    const dispatch = useDispatch();
    
    // Store favorites data in favoritesArray
    useEffect(() => {
        dispatch(getFavorites())
    },[])

    const { isLoading, isNotSearching } = useSelector((state) => state.cardData); 

    let { cardData } = useSelector((state) => state.cardData);    
    
    const [cardArr, setCardArr] = useState(cardData)

    const renderCards = () => {  

        //Remove McDonald's cards from array (they have weird params that cause errors when rendering)
        const cardArrMcd = cardArr
        const result = cardArrMcd.filter(card => !card.set.id.includes('mcd'))

        return result.map(cards => (<li key={cards.id}>
            <Cards cards={cards} />
        </li>));
    }

    useEffect(() => {
        setCardArr(cardData)
    }, [cardData])

    
    if (isLoading) { 
        return <Spinner />
    }

    if (cardData === undefined || cardData.length === 0 && !isNotSearching) {
        return <Error />
    }

   if (isNotSearching) {
       return <NotSearching />
    }

    return (       
        <div className={"main-page-container"} >
            <div className="sort-btn-container">
            </div >
                <div className="cards-section">
                    <ul className="card-grid">
                        {cardData.length > 0 && renderCards()}
                    </ul>
                </div>
        </div>
    );
}
  
export default MainPage;
