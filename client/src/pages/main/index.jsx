import React from "react";
import './index.css';
import Cards from "../../components/cards/Cards";
import Error from "../../components/error/Error";
import { useEffect, useState, useMemo } from "react";

import Spinner from '../../components/spinner/Spinner';
import NotSearching from "../../components/not_searching/NotSearching";

import { useDispatch, useSelector } from "react-redux";
//import Pagination from "../../components/pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { getFavorites } from "../../store/favoritesSlice";
import { isShowing } from "../../store/sidebarSlice"

//const PageSize =  2; //this is how many times the API is being called, when it should be how many items are on a single page

const MainPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)
    //const {isShowing} = useSelector((state) => state.sidebarToggle)

    // useEffect(() => {
    //     if (!user) {
    //         navigate('/login')
    //     }

    //     dispatch(getFavorites())
    // }, [])

    //const [currentPage, setCurrentPage] = useState(1)

    const { isLoading, isNotSearching } = useSelector((state) => state.cardData);    
    let { cardData } = useSelector((state) => state.cardData);    

    //store the favorites array as cardData
    // didClickFavorites redux?
    // if

    const {favoritesArray} = useSelector((state) => state.favorites)


    console.log(favoritesArray)

    const [cardArr, setCardArr] = useState(favoritesArray)

    cardData = favoritesArray


    //const [cardArr, setCardArr] = useState(cardData)

   // const [notLoading, setNotLoading] = useState(true)

    // const sortFunctionAtoZ = () => {
    //     const arrCopy = [...cardArr];
    //     const sortAtoZ = arrCopy.sort((a,b) => a.name.localeCompare(b.name));
    //     setCardArr(sortAtoZ)
    // }

    /*
    const sortFunctionHighToLow =() => {
        const arrCopy = [...cardArr];
        const sortHighToLow = arrCopy.sort((a,b) => {

            return b.cardmarket?.prices.trendPrice - a.cardmarket?.prices.trendPrice
        })
        setCardArr(sortHighToLow)
    }

    const sortFunctionLowToHigh =() => {
        const arrCopy = [...cardArr];
        const sortLowToHigh = arrCopy.sort((a,b) => {
            return a.cardmarket?.prices.trendPrice - b.cardmarket?.prices.trendPrice
        })
        setCardArr(sortLowToHigh)
    } */



    const renderCards = () => {  
        //Remove McDonald's cards from array (they have weird params that cause errors when rendering)
        const cardArrMcd = cardArr
        const result = cardArrMcd.filter(card => !card.set.id.includes('mcd'))
        //console.log(result)
        return result.map(cards => ( <li key={cards.id}>
            <Cards cards={cards} />
        </li>));
    }

    //Determine number of pages
    // const currentPageData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * PageSize;
    //     const lastPageIndex = firstPageIndex + PageSize;
    //     return cardData.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage])


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
                {/* <button id="sort-btn" onClick={sortFunctionAtoZ}>Sort A-Z</button> */}
            </div >
                <div className="cards-section">
                    <ul className="card-grid">
                        {cardData.length > 0 && renderCards()}
                    </ul>
                </div>
            
            {/* {currentPageData.map(() => {
                return (
                    <div className="cards-section">
                    <ul className="card-grid">
                        {cardData.length > 0 && renderCards()}
                    </ul>
                </div>
                )
            })} */}
        
            {/* <Pagination className="pagination-bar"
                currentPage={currentPage}
            totalCount={cardData.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}/> */}
        </div>
    );
}


    
export default MainPage;








/*
    ORIGINAL MAP FUNCTION

 return (
            
            <div>
                <div className="cards-section">
                    <ul>
                        <li className="card-grid">
                            {cards.length > 0 && cards.map((cards) => (
                                <Cards key={cards.id} cards={cards} />
                            ))} 
                        </li>
                    </ul>
                </div>
            </div>
        );

*/




/* const cards = useSelector((state) => state);
    const dispatch = useDispatch;

    useEffect(() => {
        (fetchCards());
    }, []) */

    // THIS WORKED

    /*const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cards, setResult] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url:'http://localhost:5000/pokemonApi',
          
        })
        .then(res => {
            setResult(res.data);
            setIsLoaded(true);
            console.log(res);
        },
        (error) => {
            setError(error)
        });

        axios({
            method: 'get',
            url: 'http://localhost:5000/setSearchApi',
        })
        .then(res => {
            setResult(res.data);
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
    } else {  */

        /*useEffect(() => {
            const sortArray = type => {
              const types = {
                name: 'name',
                priceHigh: 'priceHigh',
                priceLow: 'priceLow',
              };
              const sortProperty = types[type];
              const sorted = [...cards].sort((a, b) => b[sortProperty] - a[sortProperty]);
              setData(sorted);
            };
            sortArray(sortType);
        }, [sortType]); */










        /*
        return (
            
            <div>
                <Header />

                <div className="cards-section">
                    <ul>
                        <li className="card-grid">
                            <Cards result = { result } /> // use this for the detailed view //
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
    */

