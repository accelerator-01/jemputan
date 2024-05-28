import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  phoneNumber: "",
  password: "",
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload.fullName;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload.phoneNumber;
    },
    setPassword: (state, action) => {
      state.password = action.payload.password;
    },
    setRole: (state, action) => {
      state.role = action.payload.role;
    },
  },
});

export const { setFullName, setPhoneNumber, setPassword, setRole } =
  userSlice.actions;
export default userSlice.reducer;
