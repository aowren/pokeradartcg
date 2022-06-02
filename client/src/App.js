import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import { useSelector, useDispatch } from 'react-redux';
//import { bindActionCreators } from 'redux';
//import { actionCreators } from './actions/index';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation, withRouter } from 'react-router-dom';
import './App.css';

//Pages
import MainPage from './pages/main/index';
import Details from './pages/details/Details';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

//Containers
import Header from './containers/header/Header';
import Footer from './containers/footer/Footer'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//Components
import Sidebar from './components/sidebar/Sidebar';
//import SearchBar from './components/searchbar/SearchBar';
//import Cards from './components/cards';

import axios from 'axios';

/*
import { addCardToCollection } from './actions/collectionActions';
import { removeCardFromCollection } from './actions/collectionActions';
import { addCardToFavorites } from './actions/favoritesActions';
import { removeCardFromFavorites } from './actions/favoritesActions';
*/

import { getCardData } from './store/cardSlice';

import {isShowing} from './store/sidebarSlice'

const App = () => {

    /*const dispatch = useDispatch();

    const {cardData} = useSelector((state) => state.cardData);

    useEffect(() => {
        dispatch(getCardData())
    }, []) //[dispatch]

    //console.log(cards); */

    // if not logged in, defualt to login page

    const {isShowing} = useSelector((state) => state.sidebarToggle)


    //style={ isShowing ? {backgroundColor: 'rgba(0, 0, 0, 0.8)'} : {}} //make the background grey when sidebar is open
    return (<div className='main-container'>
            <Router>
                <Sidebar />
                <Header />
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route exact path="/details/:cardID" element={<Details />} />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    {/* add routes for favorites and collection */}
                </Routes>
                <Footer />
            </Router>
            <ToastContainer />
            </div>
    );
}

export default App;


/* OLD WAY

const [cards, setCards] = useState([]);

    const handleCardsUpdate = (cardData) => {
        setCards(cardData);
    }


return (<div className='main-container'>
            <Router>
                <Sidebar  />
                <Header state={cards} parentCallback={handleCardsUpdate}/>
                <Routes>
                    <Route exact path="/" element={<MainPage cards={cards} />} />
                    <Route exact path="/details" element={<Details cards={cards}/>} />
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
                <Footer />
            </Router>
            </div>
    );
    */