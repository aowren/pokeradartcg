
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import { SidebarData } from './SidebarData';
import './submenu.css';

const SubMenu = ({ item }) => {

    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    // const itemTitle = item.title

    // console.log(itemTitle)

    //console.log({item})

    //console.log(item.path)

    //item.path is undefined

// doesnt seem like we need item.path in the div

// condintionally render item.path


    return (
        <> 
            <Link className='link' to={item?.path} style={{ textDecoration: 'none', color: 'none' }} activeStyle={{ color: 'none' }}>

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