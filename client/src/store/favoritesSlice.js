import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import favoritesService from "./favoritesService";


const initialState = {
    favoritesArray: [], 
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    isNotIndex: false
} 


// Add card to favorites
export const addToFavorites = createAsyncThunk('card/addFavorite', async(card, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await favoritesService.addToFavorites(card, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})
 
// Get user favorites
export const getFavorites = createAsyncThunk('card/getFavoritesArray', async(_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await favoritesService.getFavorites(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})  

// Remove card from favorites
export const removeFromFavorites = createAsyncThunk('card/removeFavorite', async(card, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await favoritesService.removeFromFavorites(card, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

export const notIndex = createAsyncThunk(
    "card/notIndex",
    async() => {
        return null
    }
 
);

export const favoritesSlice = createSlice ({
    name: "favorites",
    initialState,
    reducers: {
        favReset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToFavorites.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addToFavorites.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.favoritesArray.push(action.payload)
            })
            .addCase(addToFavorites.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(removeFromFavorites.pending, (state) => {
                state.isLoading = true
            })
            .addCase(removeFromFavorites.fulfilled, (state, action) => {
                console.log(action.payload)

                state.favoritesArray.splice(state.favoritesArray.findIndex((card) => card.id === action.payload.removedCardId), 1)

                state.isSuccess = true
                state.isLoading = false
              
            })
            .addCase(removeFromFavorites.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(getFavorites.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getFavorites.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.favoritesArray = action.payload
            })
            .addCase(getFavorites.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(notIndex.fulfilled, (state) => {
                state.isNotIndex = true
            })
    }
})

export const {addFavorite, removeFavorite, getFavoritesArray, favReset, getNotIndex} = favoritesSlice.actions
export default favoritesSlice.reducer 