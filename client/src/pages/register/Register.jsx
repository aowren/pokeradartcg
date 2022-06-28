import React from 'react'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { register, reset } from '../../store/authSlice'
import { FaUser, FaSignInAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'
import Spinner from '../../components/spinner/Spinner'
import './register.css'
import video from '../../content/bg1.mp4'

const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    })

    const { username, email, password, password2 } = formData;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) {
          navigate('/')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])
    
      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
    
      const onSubmit = (e) => {
        e.preventDefault()
    
        if (password !== password2) {
          toast.error('Passwords do not match')
        } else {
          const userData = {
            username,
            email,
            password,
          }
    
          dispatch(register(userData))
        }
      }

    if (isLoading) {
        return <Spinner />
    }

    return (<>
        <video muted autoPlay loop id='bg-video'> 
            <source src={video} type='video/mp4' />
        </video>
        <div className='login-header'>
            <h1 className='logo'>PokéRadar</h1>
            <Link to='/login' style={{ textDecoration: 'none' }}>
               <h3 className='login-link'><span className='login-link-span'><FaSignInAlt /></span>Login</h3>
            </Link> 
        </div>
        <div className='form-container'>
      <section className='form-heading'>
          <h1 id='register'><span className='register-span'><FaUser /></span> Register</h1>
          <p>Create an account and collect 'em all!</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='username'
              name='username'
              value={username}
              placeholder='Enter your username'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='register-btn'>
              Register
            </button>
          </div>
        </form>
      </section>
      </div>
    </>
    )
}

export default Register