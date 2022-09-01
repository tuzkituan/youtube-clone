import { createSlice } from '@reduxjs/toolkit';

// export const fetchMe = createAsyncThunk('user/getMe', async () => {
//   const data = await callAPI.get('/me');
//   return data;
// });

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    updateToken: (state, action) => {
      // window.localStorage.setItem('token', action.payload);
      state.token = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchMe.fulfilled, (state, action) => {
  //     state.user = action.payload;
  //   });
  // },
});

export const { login, logout, updateToken } = userSlice.actions;

// selectors
export const getMe = (state: any) => state.user.user;
export const getToken = (state: any) => state?.user?.token;

export default userSlice.reducer;
