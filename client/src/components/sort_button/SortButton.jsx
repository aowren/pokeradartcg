import { useDispatch, useSelector } from "react-redux";
import { setCardData } from "../../store/cardSlice";
import './sort_button.css'

const SortButton = () => {

    const dispatch = useDispatch();
    const {cardData} = useSelector((state) => state.cardData)

    const sortFunction = () => {
        const arrCopy = [...cardData];
        const sortAtoZ = arrCopy.sort((a,b) => a.name.localeCompare(b.name));
        dispatch(setCardData(sortAtoZ))
    }

    return (
        <div className="sort-button-container">
            <button className='sort-button' onClick={sortFunction}>Sort: A to Z</button>
        </div>
    )
}

export default SortButton