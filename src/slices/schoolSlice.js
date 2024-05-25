import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schoolName: "",
  location: {
    latitude: Float64Array,
    longitude: Float64Array,
  },
};

export const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {
    setSchoolName: (state, action) => {
      state.schoolName = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setSchoolName, setLocation } = schoolSlice.actions;
export default schoolSlice.reducer;
