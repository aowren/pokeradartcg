import * as FiIcons from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { toggleShow } from '../../store/sidebarSlice';
import './hamburger_menu.css'

const HamburgerMenu = () => {

    const dispatch = useDispatch()
    

    const onClick = () => {
        dispatch(toggleShow())
    }

    return (
        <button className='hamburger-menu' onClick={onClick}>
            <FiIcons.FiMenu />
        </button>
    )
}

export default HamburgerMenu