import { configureStore } from "@reduxjs/toolkit";
import appDataReducer from "./reducer";



export const store = configureStore({
  reducer: appDataReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
