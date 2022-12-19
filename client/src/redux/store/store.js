import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../slice/userSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfiguration = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  user: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfiguration, reducer);

export default configureStore({
  reducer: persistedReducer,
});
