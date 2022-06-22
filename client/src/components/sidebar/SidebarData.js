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

export const SidebarData = [
    
    {
        title: 'Set Name',
        icon: <BsIcons.BsCardList />,
        iconClosed: <IoIcons.IoMdArrowDropdown />,
        iconOpened: <IoIcons.IoMdArrowDropup />,
        path:'#',
        subNav: [                    
            {
                
            }
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
    // {
    //     title: 'Collection',
    //     path: '/',
    //     col: 'collection',
    //     icon: <CgIcons.CgPokemon />
    // },
    // {
    //     title: 'Favorites',
    //     path: '/',
    //     fav: 'favorites',
    //     icon: <CgIcons.CgCardHearts />
    // },
    // {
    //     title: 'Profile',
    //     path: '/profile',
    //     icon: <AiIcons.AiOutlineUser />
    // }
]
