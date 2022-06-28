import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, reset, logout } from "../../store/authSlice";
import './profile.css';
import WarningMessage from "../../components/warning_message/WarningMessage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
    })

    const { currentPassword, newPassword } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const {user, isSuccess, isError, message, isDeleted} = useSelector((state) => state.auth)
    
    const {username} = useSelector((state) => state.auth.user)

    const email = useSelector((state) => state.auth.user.email)
    
    const [warningMessage, setWarningMessage] = useState(false);

    useEffect(() => {
        if (isError) {
          toast.error(message)
        }

        if (isSuccess && user) {
           toast.success(message)

            setTimeout(() => {
               window.location.reload();
            }, 2000)
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, email])

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
    }
 
    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            currentPassword,
            newPassword,
            email
        }

        dispatch(changePassword(userData))

        setFormData({
            currentPassword: '',
            newPassword: '',
        })
    }

    const onLogout = async (e) => {
        e.preventDefault()
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }

    if(isDeleted) {
        navigate('/register')
    }

    return (
        <div className="profile-container">
            <div className="user-info-container">
                <h2 className="profile-header">User Info</h2>
                <ul>
                    <li><span className="title-span"> Account Name: </span>{username}</li>
                    <li><span className="title-span"> Email: </span>{email}</li>
                    <form onSubmit={onSubmit} className='form-container'>
                    <li className="change-password-li"><span className="title-span">Change Password: </span>
                            <input type='password' placeholder='Enter current password'className="profile-password-input" name='currentPassword' value={currentPassword} onChange={onChange}></input>
                            <input type='password' placeholder='Enter new password'className="profile-password-input" name='newPassword' value={newPassword} onChange={onChange}></input>
                            <button className="profile-password-reset-button" type='submit'>Change</button>
                        </li>
                        <li>
                           <span className="button-span"><button className="profile-log-out-button" onClick={onLogout}>Log Out</button></span> 
                        </li>
                    </form>
                    <li>
                        <span className="button-span"><button className="delete-account-button" onClick={() => setWarningMessage(true)}>Delete Account</button></span> 
                    </li>
                </ul>
            </div>
            <div className="warning-popup">
            <WarningMessage trigger={warningMessage} setTrigger={setWarningMessage}>
                <h3>Delete Account?</h3>
                <p>This can't be undone.</p>
            </WarningMessage> 
            </div>
        </div>
    );
};

export default Profile;