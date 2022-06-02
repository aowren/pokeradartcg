import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteUser, reset } from '../../store/authSlice'
import { toast } from 'react-toastify'
import './warning_message.css'

const WarningMessage = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {isSuccess, isError, message} = useSelector((state) => state.auth)

    const onDelete = async (e) => {
        e.preventDefault()
        dispatch(deleteUser())
        
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            toast.success(message)
            dispatch(reset())


            //Return to register screen after 3 seconds // maybe we need to navigate from the profile page instead?
            // setTimeout(() => {
            //     navigate('/register') 
            // }, 3000)

            // navigate('/register')
        }

    }

  return (props.trigger) ? (
    <div className='warning-message-container'>

        <div className='warning-message-content'>
            {props.children}
            <div className='warning-message-btns'>
                <button className='delete-account-btn' onClick={onDelete}>Delete Account</button>
                <button className='dont-delete-btn' onClick={() => props.setTrigger(false)}>Don't Delete</button>
                {/* <btn className='dont-delete-btn'>Don't Delete</btn> */}
            </div>
        </div>

    </div>
  ) : "";
}

export default WarningMessage