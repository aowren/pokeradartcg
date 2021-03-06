import axios from "axios";

const API_URL = 'http://localhost:5000/users/'

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
}

// Delete user
const deleteUser = async (id, token) => {

    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.delete(API_URL + id, config)

    if (response.data) {
        localStorage.removeItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Change password
const changePassword = async (userData, token) => {

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.put(API_URL + 'changepassword', userData, config) 
    return response.data
}



const authService = {
    register,
    logout,
    login,
    deleteUser,
    changePassword,
}

export default authService