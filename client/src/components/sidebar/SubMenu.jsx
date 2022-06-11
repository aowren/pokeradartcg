
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFavorites } from '../../store/favoritesSlice';
// import { getFavoritesData } from "../../store/cardSlice";
//import { SidebarData } from './SidebarData';
import './submenu.css';

const SubMenu = ({ item }) => {

    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    //submenu renders it a bunch of times because of the current layout

    // need a function so that when Favorites is clicked, it retrieves the cardID's from the database, then dispatches to redux to make an API call to the pokemontcg api
    // then on the index page return the favorites array and render it

    const dispatch = useDispatch()

    // const {favoritesArray} = useSelector((state) => state.favorites)
    // console.log(favoritesArray)
    
    const handleFetchFavoritesData = async () => {

        // Get favorites array from database
        dispatch(getFavorites())

        //Send favorites array to pokemonAPI
        // try {
        //     await dispatch(getFavoritesData(favoritesArray)).unwrap(); //put the array of cards in here
        // } catch(error) {
        //     console.log(error);
        // }

    } 

    const handleFetchCollectionData = async () => {

    }

    // dispatch get favorites to store the array in redux state, then render on the index page


    return (
        <> 
        <Link className='link' to={item?.path} style={{ textDecoration: 'none', color: 'none' }} activeStyle={{ color: 'none' }} onClick={handleFetchFavoritesData}>

        <div className='sidebar-link' to={item.path} onClick={item.subNav && showSubnav}> 
                    <div className='sidebar-icon'>{item.icon}</div>
                    <div className='sidebar-label'>{item.title}</div>
               <div className='dropdown-arrows'>
                    {item.subNav && subnav 
                    ? item.iconOpened
                    : item.subNav
                    ? item.iconClosed
                    : null}
                </div>
            </div>
            </Link>
            {subnav && item.subNav.map((item, index) => { //this is only mapping one title to the submenu
                return (
                        <div className='dropdown-link' to={item.path} key={index}> 
                            <div className='dropdown-label'>{item.title}</div> 
                            {/* <div className='dropdown-label'>{titleItems}</div>  */}
                            <input type='checkbox' className='checkbox'></input> 
                            {/* onSelect -  */}
                        </div>
                )
            })}
        </>
    )
}

export default SubMenu;














/*

return (
        <>
        <SidebarLink to={item.path} onClick={item.subNav && showSubMenu}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                {item.subNav && subnav 
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return(
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
}


*/