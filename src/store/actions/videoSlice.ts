import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import callAPI from 'utils/callAPI';

export const fetchRelatedVideos = createAsyncThunk(
  'video/fetchRelatedVideos',
  async (id: any) => {
    const data = await callAPI.get(
      '/search' + (id ? '?relatedToVideoId=' + id : '')
    );
    return data?.items;
  }
);

export const fetchVideoInfo = createAsyncThunk(
  'video/fetchVideoInfo',
  async (id: any) => {
    const data = await callAPI.get('/videos' + (id ? '?id=' + id : ''));
    return data?.items?.[0];
  }
);

export const videoSlice = createSlice({
  name: 'video',
  initialState: {
    relatedVideos: [],
    videoInfo: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedVideos.fulfilled, (state, action) => {
      state.relatedVideos = action.payload;
    });
    builder.addCase(fetchVideoInfo.fulfilled, (state, action) => {
      state.videoInfo = action.payload;
    });
  },
});

// export const { login, logout, updateToken } = homeSlice.actions;

// selectors
export const getRelatedVideosState = (state: any) => state.video.relatedVideos;
export const getVideoInfoState = (state: any) => state.video.videoInfo;
// export const getToken = (state: any) => state?.home?.token;

export default videoSlice.reducer;
