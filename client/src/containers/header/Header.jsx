import React from 'react';
import SearchBar from '../../components/searchbar/SearchBar';
import SortButton from '../../components/sort_button/SortButton'
import HamburgerMenu from '../../components/hamburger_menu/HamburgerMenu';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { logout, reset } from '../../store/authSlice'
import './header.css';
import { FaSignOutAlt } from 'react-icons/fa';

const Header = () => {

    const {cardData} = useSelector((state) => state.cardData)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogout = async () => {
        await dispatch(logout())
        await dispatch(reset())
        navigate('/login')
    }

    //Hide component
    let location = useLocation()

    if (location.pathname.match('/login') || location.pathname.match('/register')) {
        return null
    }

    return (
        <div className='header-container'>
            <HamburgerMenu />
            <SortButton props={cardData}/>
            <SearchBar />
            <div id='header-profile-container'>
                <button id='header-logout-button' onClick={onLogout}><FaSignOutAlt /> Log Out</button>
            </div>
        </div>
    )
}

export default Header;
