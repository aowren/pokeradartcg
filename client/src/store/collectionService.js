// import axios from "axios";

// const COLLECTION_API_URL = 'http://localhost:5000/users/collection/'

// // Add card to collection
// const addToCollection = async (card, token) => {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     }

//     const response = await axios.post(COLLECTION_API_URL, {
//         data: card
//     }, config)
//     return response.data
// }

// // Get collection array
// const getCollection = async (token) => {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     }

//     const response = await axios.get(COLLECTION_API_URL, config)
//     console.log(response.data)
//     return response.data
// }

// // Remove card from collection
// const removeFromCollection = async (cardID, token) => { 
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     } 
//     console.log(cardID)
//     const REMOVE_COLLECTION_API_URL = `http://localhost:5000/users/collection/${cardID}`

//     const response = await axios.delete(REMOVE_COLLECTION_API_URL, config)
//     return response.data  
// }

// const collectionService = {
//     addToCollection,
//     removeFromCollection,
//     getCollection
// }

// export default collectionService