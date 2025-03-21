import { configureStore } from '@reduxjs/toolkit';
import cinetrackReducer from '../features/cinetrack/cineTrackSlice'

export const store = configureStore({
    reducer: {
        cinetrack: cinetrackReducer,
    },
});

export default store