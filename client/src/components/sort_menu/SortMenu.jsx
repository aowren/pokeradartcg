import React from 'react'
import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import {sortAtoZ, sortHighToLow, sortLowToHigh} from '../../store/sortBySlice'
import './sort_menu.css'
// Dropdown list categories
//const categories = ["A to Z", "Price: High to Low", "Price: Low to High"];
//const sort = ["Sort By"];



const SortMenu = () => {

    const dispatch = useDispatch();

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













/*
const menuItems = [
    {   
        title: "A to Z", //{currentTitle}
        submenu: [
            {
                title: "A to Z"
            },
            {
                title: "High to Low"
            },
            {
                title: "Low to High"
            }
        ]
    },
]
*/
/*
const SortMenu = () => {

    //const [title, setTitle] = useState('A to Z')
    //const currentTitle = setTitle()

    const [sort, setSort] = useState("")

    return (
        <div className='sort-menu-container'>
            <ul className='sort-menu-ul'>
               { menuItems.map((menu, index) => {
                   return (
                    <li className="menu-items" key={index}>
                    <a href="/#">{menu.title}</a>
                   </li>
                   )
               }) }
            </ul>
        </div>
    )
}
*/
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
