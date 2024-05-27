import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import schoolSlice from "../slices/schoolSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    school: schoolSlice,
  },
});

export default store;
