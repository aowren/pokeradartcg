import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './sidebar.css';
import * as IoIcons from 'react-icons/io'
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCollapse } from '../../store/sidebarSlice';

const Sidebar = () => {

    const dispatch = useDispatch();
    const {isCollapsed} = useSelector((state) => state.sidebarToggle)

    // const [closeSidebar, setCloseSidebar] = useState(toggle);
    const [toggle, setToggle] = useState(false);  

    useEffect(() => {
        if (isCollapsed === false) {
            setToggle(true)
        }
    })
 
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
    
    return (
        <div className="sidebar" style={{ display: (toggle ? 'flex' : 'none') }} >
            <ul className="sidebar-list">
            <h1 id="sidebar-title" onClick={onClick}>PokéRadar</h1>
                {SidebarData.map((item, index) => {
                    return (
                            <div className='row'>
                                <SubMenu item={item} key={index} />
                            </div>
                    ); 
                })}
                {/* <button className='close-sidebar' onClick={() => setCloseSidebar(!closeSidebar)}> */}
                {/* <button className='close-sidebar' onClick={() => setToggleSidebar(false)}> */}
                <button className='close-sidebar' onClick={onToggle}>
                    <IoIcons.IoMdClose />
                </button>
            </ul>
         
        </div>
    );
}

export default Sidebar;










/*const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="sidebar">
            <ul className="sidebarList">
            <h1 id="sidebarTitle">PokeRadar</h1>
                {SidebarData.map((val, key) => {
                    return ( 
                        <li key={key}
                        className ="row"
                        //id={window.location.pathname == val.link ? "active" : ""} might not be necessary to implement
                        onClick={() => {
                            window.location.pathname = val.link
                            }}
                        >
                           <div id="icon">{val.icon}</div> <div id="title">{val.title}</div> 
                        </li>
                    ); 
                })}
            </ul>
        </div>
    );
}

export default Sidebar; */

// how does val.link affect the set and rarity menu items