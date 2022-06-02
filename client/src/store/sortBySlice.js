import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortBy: ''
}

const sortBySlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        sortAtoZ: (state, action) => {
            state.sortBy = action.payload
        },
        sortHighToLow: (state, action) => {
            state.sortBy = action.payload
        },
        sortLowToHigh: (state, action) => {
            state.sortBy = action.payload
        }     
    }
})

export const {sortAtoZ, sortHighToLow, sortLowToHigh} = sortBySlice.actions
export default sortBySlice.reducer