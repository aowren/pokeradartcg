import React from 'react'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { login, reset } from '../../store/authSlice'
import { toast } from 'react-toastify'
import Spinner from '../../components/spinner/Spinner'
import {FaSignInAlt} from 'react-icons/fa'
import video from '../../content/bg.mp4'
import './login.css'

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess && user) {
          navigate('/')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess]
    )

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    if (isLoading) {
        return <Spinner />
    }

    return (<>
        <video muted autoPlay loop id='bg-video'> 
                <source src={video} type='video/mp4' />
            </video>
            <div className='register-header'>
                <h1 className='logo'>PokéRadar</h1>
                <Link to='/register' style={{ textDecoration: 'none' }}>
                <h3 className='register-link'><FaSignInAlt /> Register</h3>
                </Link> 
            </div>
            <div className='form-container'>
            <section className='form-heading'>
                <h1 id='login'><FaSignInAlt /> Login</h1>
                <p>Login to see your collection!</p>
            </section>

            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            id='email' 
                            value={email}
                            name='email' 
                            placeholder='Enter your email' 
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password" 
                            className="form-control" 
                            id='password' 
                            value={password} 
                            name='password'
                            placeholder='Enter your password' 
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type='submit' className='login-btn'> 
                            Login
                        </button>
                    </div>
                </form>
            </section>
        </div>
    </>
)}

export default Login