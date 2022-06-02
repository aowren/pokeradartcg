import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import NotSearching from '../components/not_searching/NotSearching';


//Thunk 
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



// add call for the sidebar functions (set, rarity)

const cardSlice = createSlice({
    name: 'cardData',
    initialState: {
        cardData: [],
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
    }

})

export default cardSlice.reducer;


