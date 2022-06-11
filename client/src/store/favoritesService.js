import axios from "axios";

// const FAVORITES_API_URL = 'http://localhost:5000/favorites/'
const FAVORITES_API_URL = 'http://localhost:5000/users/favorites/'

// Add card to favorites
/*
const addToFavorites = async (cardID) => { 
    const response = await axios.post(FAVORITES_API_URL, cardID)

   if (response.data) {
        localStorage.setItem('cardID', JSON.stringify(response.data))
    } 

    return response.data
} */

// Add card to favorites
const addToFavorites = async (card, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    // const response = await axios.post(FAVORITES_API_URL, {cardID: cardID}, config)
    const response = await axios.post(FAVORITES_API_URL, {
        data: card}, config)
    return response.data
}

// Get favorites array

const getFavorites = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(FAVORITES_API_URL, config)
    console.log(response.data)
    return response.data
}

// Remove card from favorites
const removeFromFavorites = async (cardID, token) => { 
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    } 
    // const REMOVE_FAVORITES_API_URL = `http://localhost:5000/favorites/${cardID}`
    console.log(cardID)
    const REMOVE_FAVORITES_API_URL = `http://localhost:5000/users/favorites/${cardID}` // this is not sending the cardID to the backend, but the route is correct

    const response = await axios.delete(REMOVE_FAVORITES_API_URL, config)
    return response.data  
}

const favoritesService = {
    addToFavorites,
    removeFromFavorites,
    getFavorites
}

export default favoritesService