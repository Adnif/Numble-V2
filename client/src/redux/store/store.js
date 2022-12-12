import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slice/userSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
