import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import userReducer from './actions/userSlice';
import homeReducer from './actions/homeSlice';
import videoReducer from './actions/videoSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    home: homeReducer,
    video: videoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
