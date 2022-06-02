import './not_searching.css'
import pikachuGif from '../../content/pikachu.gif'
import * as MdIcons from 'react-icons/md'

const NotSearching = () => {
    return (
        <div className="not-searching-container">
            <h2 className='not-searching-header'>Type in the name of a pokemon and start collecting 'em all!</h2>
            {/* <div className='not-searching-icon'><MdIcons.MdOutlineImageSearch /></div> */}
            <img className='pikachu-gif' src={pikachuGif} alt='pikachu gif'></img>
        </div>
    )
}

export default NotSearching