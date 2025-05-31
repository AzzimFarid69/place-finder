import { configureStore } from "@reduxjs/toolkit";
import placesReducer from './features/places/placesSlice';

const store = configureStore({
    reducer: {
        places: placesReducer,
    },
});

export default store;