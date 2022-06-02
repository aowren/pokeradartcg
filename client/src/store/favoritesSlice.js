import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import favoritesService from "./favoritesService";


const initialState = {
    favortiesArray: [],
    isFavorite: false,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
} 


// Add card to favorites
export const addToFavorites = createAsyncThunk('card/addFavorite', async(cardID, thunkAPI) => {
    console.log(cardID)
    try {
        const token = thunkAPI.getState().auth.user.token
        return await favoritesService.addToFavorites(cardID, token)
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
export const removeFromFavorites = createAsyncThunk('card/removeFavorite', async(id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await favoritesService.removeFromFavorites(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

export const favoritesSlice = createSlice ({
    name: "favorites",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addToFavorites.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addToFavorites.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.favortiesArray.push(action.payload.cardID)
                state.isFavorite = true
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
                state.favortiesArray = state.favortiesArray.filter(
                    (card) => card !== action.payload.id
                )
                state.isSuccess = true
                state.isFavorite = false
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
                state.favortiesArray = action.payload
            })
            .addCase(getFavorites.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {addFavorite, removeFavorite, getFavoritesArray} = favoritesSlice.actions
export default favoritesSlice.reducer 