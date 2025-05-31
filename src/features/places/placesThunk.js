import { createAsyncThunk } from '@reduxjs/toolkit';
import { mockPlaces } from '../../data/mockPlaces';

export const fetchPlaces = createAsyncThunk('places/fetchPlaces', async (query) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filtered = mockPlaces.filter((place) => 
            place.description.toLowerCase().includes(query.toLowerCase())
        );
        resolve(filtered);
        });
    });
});