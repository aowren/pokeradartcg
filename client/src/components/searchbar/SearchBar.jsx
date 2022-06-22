import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';

import './searchbar.css'

import { useDispatch, useSelector } from "react-redux";

import { getCardData } from "../../store/cardSlice";

const SearchBar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [searchInput, setSearchInput] = useState(''); // state of the keyboard input
    
    const { cardData } = useSelector((state) => state.cardData); // cardData from reducer

    let {favoritesArray} = useSelector((state) => state.favorites)

    /*
    useEffect(() => {

        if (!searchInput) return;

        const timer = setTimeout(() => {
            dispatch((getCardData(searchInput)))
        }, 5000)

        return () => clearTimeout(timer);
        
    }, [searchInput]) */
    
    //console.log(cardData);

    const handleKeyPress = (e) => {
        
        if (e.key === 'Enter') {
            try {
                const data = dispatch(getCardData(searchInput)).unwrap();
                console.log(data);
                navigate('/')
            } catch({e}) {
                console.error(e);
            }
        }
    } 

    const handleFetchCardData = async () => {
        try {
            const data = await dispatch(getCardData(searchInput)).unwrap();
            console.log(data);
            navigate('/')
        } catch({e}) {
            console.error(e);
        }
    } 

    return (
        <div className="searchBar">
            <div className="searchHeader">
                <input type="text" placeholder="Search" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} onKeyDown={handleKeyPress}/> 
                <button onClick={handleFetchCardData} className="searchButton">Search</button>
            </div>
        </div>
    )
}

export default SearchBar;













    /*const [searchInput, setSearchInput] = useState('');

    const [cardData, setCardData] = useState([]);

    const navigate = useNavigate();
    
    const searchInputFunction = () => {
        axios.get(`http://localhost:5000/pokemonApi?searchInput=${searchInput}`)
        .then (res => {
            setCardData(res.data)
            console.log(res.data)

        })
        navigate('/')
    }; 

    useEffect(() => {

        const timer = setTimeout(() => {
            parentCallback(cardData)
        }, 5000)

        return () => clearTimeout(timer);

    }, [cardData]); */








//button onClick={searchInputFunction} --old function


















/*

   useEffect(() => {

        const timer = setTimeout(() => {
            parentCallback(cardData)
        }, 5000)

        return () => clearTimeout(timer);
        
    }, [cardData])
    

    const handleKeyPress = (e) => {
        
        if (e.key === 'Enter') {
          getCardData({value:e.target.value})
          //searchInputFunction
          //navigate('/')
        }
    }


*/





/*
return (
    <div className="searchBar">
        <div className="searchHeader">
            <input type="text" placeholder="Search" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} onKeyDown={handleKeyPress}  /> 
            <button onClick={getCardData} className="searchButton">Search</button> 
        </div>
    </div>
    ) */







   // const cards = useSelector((state) => state.data);
    //const dispatch = useDispatch;

    //const searchInput = () => dispatch(setInput(cards))


   /* useEffect(() => {
        (fetchCards());
    }, []) */







    /*
    return (
    <div className="searchBar">
    <div className="searchHeader">
        <input type="text" placeholder="Search" onChange={onChange}/> 
        <button onClick={() => dispatch({ type: 'FETCH_CARDS_REQUEST'})} className="searchButton">Search</button>
    </div>
</div>
    ) */





/*

    useEffect(() => {
        axios({
            method: 'get',
            url:'http://localhost:5000/pokemonApi'
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

    [searchInput, setSearchInput] = useState('');

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        APIData.filter((item) => {
            return Object.values(item).join(').toLowerCase().includes(searchInput.toLowerCase())
        })
    
    }






*/