import axios from "axios";

const FAVORITES_API_URL = 'http://localhost:5000/favorites/'

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
const addToFavorites = async (cardID, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(FAVORITES_API_URL, {cardID: cardID}, config)
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
    return response.data
}

// Remove card from favorites
const removeFromFavorites = async (cardID, token) => { // need to somehow get _id and replace id!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const REMOVE_FAVORITES_API_URL = `http://localhost:5000/favorites/${cardID}`

    const response = await axios.delete(REMOVE_FAVORITES_API_URL, config) // if we put the _id in this url it WILL delete from the database
    console.log(response.data)
    return response.data  
} 

const favoritesService = {
    addToFavorites,
    removeFromFavorites,
    getFavorites
}

export default favoritesService