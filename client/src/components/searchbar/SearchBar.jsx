import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import './searchbar.css'

import { useDispatch } from "react-redux";

import { getCardData } from "../../store/cardSlice";

const SearchBar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [searchInput, setSearchInput] = useState('');
    
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