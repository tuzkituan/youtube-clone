import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import callAPI from 'utils/callAPI';

export const searchVideos = createAsyncThunk(
  'home/searchVideos',
  async (searchText: string) => {
    const data = await callAPI.get(
      '/search' + (searchText ? '?q=' + searchText : '')
    );
    return data;
  }
);

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    searchResult: {},
  },
  reducers: {
    // login: (state, action) => {
    //   state.home = action.payload;
    // },
    // logout: (state) => {
    //   state.home = null;
    //   state.token = null;
    // },
    // updateToken: (state, action) => {
    //   // window.localStorage.setItem('token', action.payload);
    //   state.token = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(searchVideos.fulfilled, (state, action) => {
      state.searchResult = action.payload;
    });
  },
});

// export const { login, logout, updateToken } = homeSlice.actions;

// selectors
export const getSearchResult = (state: any) => state.home.searchResult || {};
// export const getToken = (state: any) => state?.home?.token;

export default homeSlice.reducer;
