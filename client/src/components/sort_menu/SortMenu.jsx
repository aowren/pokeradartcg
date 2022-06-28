import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './sort_menu.css'


const SortMenu = () => {

    const [value, setValue] = useState('AtoZ')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className='sort-menu-container'>
            <label className='sort-menu-label'>
                Sort by: 
                <select value={value} onChange={handleChange}>
                    <option className="sort-menu-option" value="AtoZ">A to Z</option>
                    <option className="sort-menu-option" value="Price High">Price: High to Low</option>
                    <option className="sort-menu-option" value="Price Low">Price: Low to High</option>
                </select>
            </label>
        </div>
    )
}

export default SortMenu











































/*

const SortMenu = ({}) => {

    const [open, setOpen] = useState(false);

  return (
    <div className='sort-menu-container'>
        <div className='sort-menu-title'></div>
        <li className='sort-menu-list'>
            <a href='#' className='' onClick={() => setOpen(!open)}></a>
        </li>
        {open && props.children}
    </div>
  )
}

export default SortMenu;

*/
/*
const SortMenu = ({sortFunctionAtoZ}) => {
 
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        sortCallback(cardData)
    }, [])

    const handleSort = () => {
        const sortAtoZ = [...cardData].sort((a,b) => {
            return a.name > b.name ? 1 : -1
        })
        setCardData(sortAtoZ)
    } 

    // return (
    //     <div className="sort-menu-container">
    //             <div className='sort-menu-header'>
    //                 <div className='sort-menu-title'>Sort by: </div>
    //             </div>
    //         <div className='sort-menu-list'>
    //             <button className='sort-menu-item'>Market: High to Low</button>
    //             <button className='sort-menu-item'>Market: Low to High</button>
    //             <button onClick={sortFunctionAtoZ} className='sort-menu-item'>A-Z</button>
    //         </div>
    //     </div> 
)} */


//export default SortMenu;
