import { createSlice } from '@reduxjs/toolkit';
import { fetchPlaces } from './placesThunk';

const placesSlice = createSlice({
    name: 'places',
    initialState: {
        results: [],
        history: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPlaces.pending, (state) => {
            state.loading =  true;
        })
        .addCase(fetchPlaces.fulfilled, (state, action) => {
            state.loading = false;
            state.results = action.payload;
            state.history.push(...action.payload);
        })
        .addCase(fetchPlaces.rejected, (state) => {
            state.loading = false;
        });
    },
});

export default placesSlice.reducer;