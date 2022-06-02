import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCollapsed: false,
    isShowing: true,
}

const sidebarSlice = createSlice({
    name: "sidebarToggle",
    initialState,
    reducers: {
        toggleCollapse: (state) => {
            state.isCollapsed = true;
            state.isShowing = false;
        },
        toggleShow: (state) => {
            state.isShowing = true;
            state.isCollapsed = false;
        }
    }
})

export const {toggleCollapse, toggleShow} = sidebarSlice.actions
export default sidebarSlice.reducer