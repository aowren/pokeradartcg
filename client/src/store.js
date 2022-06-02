import {configureStore} from "@reduxjs/toolkit";
import cardSlice from "./store/cardSlice";
import authReducer from './store/authSlice';
import favoritesSlice from "./store/favoritesSlice";
import sortBySlice from "./store/sortBySlice";
import sidebarSlice from "./store/sidebarSlice";

const store = configureStore({
    reducer: {
        cardData: cardSlice,
        auth: authReducer,
        favorites: favoritesSlice,
        sortBy: sortBySlice,
        sidebarToggle: sidebarSlice,
    }
});

export default store;