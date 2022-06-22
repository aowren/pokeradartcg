
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { setCardData } from '../../store/cardSlice';
// import { getFavorites } from '../../store/favoritesSlice';
// // import { getFavoritesData } from "../../store/cardSlice";
// //import { SidebarData } from './SidebarData';
// import './submenu.css';

// const SubMenu = ({ item }) => {

//     const [subnav, setSubnav] = useState(false)

//     const showSubnav = () => setSubnav(!subnav)

//     //submenu renders it a bunch of times because of the current layout

//     // const dispatch = useDispatch()

//     // const {isSuccess} = useSelector((state) => state.favorites)
//     // let { cardData } = useSelector((state) => state.cardData)
//     // const {favoritesArray} = useSelector((state) => state.favorites)
    
    
//     // const handleFetchFavoritesData = async () => {

//     //     try {
//     //     // Get favorites array from database
//     //         dispatch(getFavorites())

//     //         if (isSuccess === true) {
//     //             cardData = favoritesArray
//     //             dispatch(setCardData(cardData))
//     //         }
//     //     } catch (error) {
//     //         console.log(error)
//     //     } 
//     // } 

//     // const handleFetchCollectionData = async () => {
//     //     console.log('taint')
//     // }


//     return (
//         <> 
//         <Link className='link' to={item?.path} style={{ textDecoration: 'none', color: 'none' }} activeStyle={{ color: 'none' }}>
//             <div className='sidebar-link' to={item.path} onClick={item.subNav && showSubnav}> 
//                         <div className='sidebar-icon'>{item.icon}</div>
//                         <div className='sidebar-label'>{item.title}</div>
//                 <div className='dropdown-arrows'>
//                         {item.subNav && subnav 
//                         ? item.iconOpened
//                         : item.subNav
//                         ? item.iconClosed
//                         : null}
//                 </div>
//             </div>
//             {/* <div className='sidebar-link'  onClick={handleFetchFavoritesData}></div> */}

//             </Link>
           
//             {subnav && item.subNav.map((item, index) => {
//                 return (
//                         <div className='dropdown-link' to={item.path} key={index}> 
//                             <div className='dropdown-label'>{item.title}</div> 
//                             {/* <div className='dropdown-label'>{titleItems}</div>  */}
//                             <input type='checkbox' className='checkbox'></input> 
//                             {/* onSelect -  */}
//                         </div>
//                 )
//             })}
//         </>
//     )
// }

// export default SubMenu;






