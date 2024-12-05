import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteMealIds: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.favoriteMealIds.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favoriteMealIds.splice(
        state.favoriteMealIds.indexOf(action.payload),
        1
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
