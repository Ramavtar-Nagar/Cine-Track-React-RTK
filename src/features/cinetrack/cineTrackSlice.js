import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tabs: [{ movie: null }],
    activeTabIndex: 0,
};

export const cineTrackSlice = createSlice({
    name: "cinetrack",
    initialState,
    reducers: {
        addTab: (state) => {
            state.tabs.push({ movie: null });
            state.activeTabIndex = state.tabs.length - 1;
        },
        removeTab: (state, action) => {
            state.tabs.splice(action.payload, 1);
            if (state.tabs.length === 0) {
                state.tabs = [];
                state.activeTabIndex = -1;
            } else {
                state.activeTabIndex = Math.max(0, state.activeTabIndex - 1);
            }
        },
        setActiveTab: (state, action) => {
            state.activeTabIndex = action.payload;
        },
        setMovieDetails: (state, action) => {
            state.tabs[state.activeTabIndex].movie = action.payload;
        },
    },
});

export const { addTab, removeTab, setActiveTab, setMovieDetails } = cineTrackSlice.actions;
export default cineTrackSlice.reducer;
