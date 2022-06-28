import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from 'react-icons/si';

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
    }
]
