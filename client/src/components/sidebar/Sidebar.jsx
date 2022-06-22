import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './sidebar.css';
import * as IoIcons from 'react-icons/io'
import * as CgIcons from 'react-icons/cg';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { setCardData } from '../../store/cardSlice';
import { getFavorites, notIndex } from '../../store/favoritesSlice';
import { favReset } from '../../store/favoritesSlice'
import { getNotIndex } from '../../store/favoritesSlice';
// import SubMenu from './SubMenu';

import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCollapse } from '../../store/sidebarSlice';

const Sidebar = () => {

    const dispatch = useDispatch();

    const {favoritesArray, isSuccess, isNotIndex} = useSelector((state) => state.favorites)
    
    const {isCollapsed} = useSelector((state) => state.sidebarToggle)

    const [toggle, setToggle] = useState(false);  

    const isClicked = false;

    //Sidebar toggle for mobile devices
    useEffect(() => {
        if (isCollapsed === false) {
            setToggle(true)
        }
    })

    //Set favoritesArray to cardData
    useEffect(() => {
        if (isSuccess && isNotIndex) {
            dispatch(setCardData(favoritesArray))
            dispatch(favReset())
        }
    
    }, [favoritesArray])
  
    const navigate = useNavigate();

    //Hide component
    let location = useLocation()

    if (location.pathname.match('/login') ||  location.pathname.match('/register')) {
        return null
    }

    //Return to main page  
    const onClick = () => {
        navigate('/')

        if (location.pathname.match('/')) {
            window.location.reload();
        }
    }

    const onToggle = () => {
        setToggle(false)
        dispatch(toggleCollapse())
    }

    const handleFetchFavoritesData = async () => {
        dispatch(getFavorites())
        dispatch(notIndex())
        navigate('/')     
    }

    return (
        <div className="sidebar" style={{ display: (toggle ? 'flex' : 'none') }} >
                <button className='close-sidebar' onClick={onToggle}>
                    <IoIcons.IoMdClose />
                </button>
            <ul className="sidebar-list">
            <h1 id="sidebar-title" onClick={onClick}>PokéRadar</h1>
                {/* {SidebarData.map((item, index) => {
                    return (
                            <div className='row'>
                                <SubMenu item={item} key={index} />
                            </div>
                    ); 
                })} */}
                {/* <button className='close-sidebar' onClick={() => setCloseSidebar(!closeSidebar)}> */}
                {/* <button className='close-sidebar' onClick={() => setToggleSidebar(false)}> */}
                {/* <li className='sidebar-list-item' onClick={handleFetchCollectionData}><CgIcons.CgPokemon /> <span className='list-text'>Collection</span></li> */}
                <li className='sidebar-list-item' onClick={handleFetchFavoritesData}><CgIcons.CgCardHearts /> <span className='list-text'>Favorites</span></li>
                <Link to={'/profile'} style={{ textDecoration: 'none', color: 'none' }} activestyle={{ color: 'none' }}>
                   <li className='sidebar-list-item'><AiIcons.AiOutlineUser /> <span className='list-text'>Profile</span></li>
                </Link> 
            </ul>
         
        </div>
    );
}

export default Sidebar;
