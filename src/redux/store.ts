import { configureStore, 
  // applyMiddleware
 } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import todoReducer from "./features/todoSlice";

export const store = configureStore({
  reducer: {todoReducer},
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: myCustomApiService,
  //     },
  //   }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 