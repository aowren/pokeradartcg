// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import collectionService from "./collectionService";


// const initialState = {
//     collectionArray: [], 
//     isError: false,
//     isSuccessCollect: false,
//     isLoading: false,
//     message: "",
//     isNotIndex: false
// } 

// // Add card to collection
// export const addToCollection = createAsyncThunk('card/addCollection', async(card, thunkAPI) => {
//     try {
//         const token = thunkAPI.getState().auth.user.token
//         return await collectionService.addTocollection(card, token)
//     } catch (error) {
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
//         return thunkAPI.rejectWithValue(message)
//     }
// })
 
// // Get user collection
// export const getCollection = createAsyncThunk('card/getCollectionArray', async(_, thunkAPI) => {
//     try {
//         const token = thunkAPI.getState().auth.user.token
//         return await collectionService.getCollection(token)
//     } catch (error) {
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
//         return thunkAPI.rejectWithValue(message)
//     }
// })  

// // Remove card from collection
// export const removeFromCollection = createAsyncThunk('card/removeCollection', async(card, thunkAPI) => {
//     try {
//         const token = thunkAPI.getState().auth.user.token
//         return await collectionService.removeFromCollection(card, token)
//     } catch (error) {
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
//         return thunkAPI.rejectWithValue(message)
//     }
// })

// export const notIndex = createAsyncThunk(
//     "card/notIndex",
//     async() => {
//         return null
//     }
 
// );

// export const collectionSlice = createSlice ({
//     name: "collection",
//     initialState,
//     reducers: {
//         collectionReset: (state) => {
//             state.isLoading = false
//             state.isError = false
//             state.isSuccessCollect = false
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(addToCollection.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(addToCollection.fulfilled, (state, action) => {
//                 state.isLoading = false
//                 state.isSuccessCollect = true
//                 state.collectionArray.push(action.payload)
//             })
//             .addCase(addToCollection.rejected, (state, action) => {
//                 state.isLoading = false
//                 state.isError = true
//                 state.message = action.payload
//             })
//             .addCase(removeFromCollection.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(removeFromCollection.fulfilled, (state, action) => {
//                 state.collectionArray.splice(state.collectionArray.findIndex((card) => card.id === action.payload), 1);
//                 state.isSuccessCollect = true
//                 state.isLoading = false
//             })
//             .addCase(removeFromCollection.rejected, (state, action) => {
//                 state.isError = true
//                 state.isLoading = false
//                 state.message = action.payload
//             })
//             .addCase(getCollection.pending, (state) => {
//                 state.isLoading = true
//             })
//             .addCase(getCollection.fulfilled, (state, action) => {
//                 state.isLoading = false
//                 state.isSuccessCollect = true
//                 state.collectionArray = action.payload
//             })
//             .addCase(getCollection.rejected, (state, action) => {
//                 state.isLoading = false
//                 state.isError = true
//                 state.message = action.payload
//             })
//             .addCase(notIndex.fulfilled, (state) => {
//                 state.isNotIndex = true
//             })
//     }
// })

// export const {addCollection, removeCollection, getCollectionsArray, collectionReset, getNotIndex} = collectionSlice.actions
// export default collectionSlice.reducer 