import * as CgIcons from 'react-icons/cg';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from 'react-icons/si';

//import redux state to fill the subNav items

import store from '../../store.js'

const state = store.getState()
const cardData = state.cardData

const setNameArr = cardData.cardData.map((i) => {
    return i.set.name
})

//let newSetNameArr = [];

/*
const setName = () => {

    // for (let i = 0; i < setNameArr.length; i++) {
    //     console.log(setNameArr[i])
    // }

    const newSetNameArr =setNameArr.map(i => {
        return i
    })
    console.log(newSetNameArr)
    return newSetNameArr
} */


const newSetNameArr = setNameArr.map(i =>  i)
console.log(newSetNameArr)


//console.log(setName)
console.log('hello!!!')

export const SidebarData = [
  
    {
        title: 'Set Name',
        icon: <BsIcons.BsCardList />,
        iconClosed: <IoIcons.IoMdArrowDropdown />,
        iconOpened: <IoIcons.IoMdArrowDropup />,
        path:'#',
        subNav: [                     // import set names here // put checkbox in subnav
            {
                title: newSetNameArr[1], //only one title allowed?
                //title: 'test'
            },
        ],
    },
    {
        title: 'Rarity',
        icon: <SiIcons.SiApachespark />,
        iconClosed: <IoIcons.IoMdArrowDropdown />,
        iconOpened: <IoIcons.IoMdArrowDropup />,
        path:'#',
        subNav: [
            {
                title: 'Holo',
                title: 'Rare'
            }
        ]
    },
    {
        title: 'Collection',
        path: '/collection',
        icon: <CgIcons.CgPokemon />
    },
    {
        title: 'Favorites',
        path: '/',
        favorites: 'favorites',
        icon: <CgIcons.CgCardHearts /> //onClick, return all user favorites || have a seperate favorites page?
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <AiIcons.AiOutlineUser />
    }
]
