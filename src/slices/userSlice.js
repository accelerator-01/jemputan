import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  phoneNumber: "",
  password: "",
  role: "Guru" || "Wali",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setFullName, setPhoneNumber, setPassword, setRole } =
  userSlice.actions;
export default userSlice.reducer;
