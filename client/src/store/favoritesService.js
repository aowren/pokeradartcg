import axios from "axios";

const FAVORITES_API_URL = 'http://localhost:5000/users/favorites/'

// Add card to favorites
const addToFavorites = async (card, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(FAVORITES_API_URL, {
        data: card
    }, config)
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
    console.log(cardID)
    const REMOVE_FAVORITES_API_URL = `http://localhost:5000/users/favorites/${cardID}`

    const response = await axios.delete(REMOVE_FAVORITES_API_URL, config)
    const data = response.data
    data.removedCardId = cardID
    return data
}

const favoritesService = {
    addToFavorites,
    removeFromFavorites,
    getFavorites
}

export default favoritesService