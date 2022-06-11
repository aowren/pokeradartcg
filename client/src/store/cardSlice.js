import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getCardData = createAsyncThunk(
    "cardData/getCardData",
    async (searchInput) => {
        const response = await axios(`http://localhost:5000/pokemonApi?searchInput=${searchInput}`);
        return response.data;
    }
);

export const setCardData = createAsyncThunk(
    "cardData/setCardData",
    async (cardData) => {
        return cardData
    }
);

export const notSearching = createAsyncThunk(
    "cardData/notSearching",
    async() => {
        return null
    }
 
);

// Call to the pokemonAPI
// export const getFavoritesData = createAsyncThunk(
//     "cardData/getFavoritesData",
//     async (favoritesData) => {

//         const response = await axios.post(`http://localhost:5000/pokemonApi/favorites`,{
//             data: {
//                 favoritesData}
//         }); //favoritesData needs to be injected with the array of cardID's from the database //might not be hitting the backend
//         console.log(response.data)
//         return response.data
//     }
// )


// add call for the sidebar functions (set, rarity)

const cardSlice = createSlice({
    name: 'cardData',
    initialState: {
        cardData: [],
        favoritesData: [],
        isLoading: false,
        isNotSearching: true,
    },
    /*reducers: {
        [getCardData.pending]: (state, action) => {
            state.status = "loading";
            //state.isLoading = true;
        },
        [getCardData.fulfilled]: (state, action) => {
            state.status = "success";
            state.cardData = action.payload;
        },
        [getCardData.rejected]: (state, action) => {
            state.status = "failed";
        }
    }, */
    extraReducers: (builder) => {
        builder.addCase(getCardData.pending, (state) => {
            state.isLoading = true
            state.isNotSearching = false
        })
        builder.addCase(getCardData.fulfilled, (state, action) => {
            state.cardData = action.payload
            state.isLoading = false
            state.isNotSearching = false
        })
        builder.addCase(getCardData.rejected, (state) => {
            state.cardData = null
            state.isLoading = false
            state.isNotSearching = false
        })
        builder.addCase(setCardData.fulfilled, (state, action) => {
            state.cardData = action.payload
            state.isNotSearching = false
        })
        builder.addCase(notSearching.fulfilled, (state) => {
            state.isNotSearching = true
        })
        // builder.addCase(getFavoritesData.pending, (state) => {
        //     state.isLoading = true
        //     state.isNotSearching = false
        // })
        // builder.addCase(getFavoritesData.fulfilled, (state, action) => {
        //     state.favoritesData = action.payload
        //     state.isLoading = false
        //     state.isNotSearching = false
        // })
        // builder.addCase(getFavoritesData.rejected, (state) => {
        //     state.favoritesData = null
        //     state.isLoading = false
        //     state.isNotSearching = false
        // })
    }   

})

export default cardSlice.reducer;


