import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const fetchLocation = createAsyncThunk(async () => {
  const objPosition = await getPosition();
  const location = {
    latitude: objPosition.coords.latitude,
    longitude: objPosition.coords.longitude,
  };

  return { location };
});

const initialState = {
  schoolName: "",
  location: {},
  status: "idle",
  error: null,
};

export const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {
    setSchoolName: (state, action) => {
      state.schoolName = action.payload.schoolName;
    },
    setLocation: (state, action) => {
      state.location = action.payload.location;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.location = action.payload.location;
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(fetchLocation.pending, (state) => {
        state.status = "loading";
      });
  },
});

export const { setSchoolName, setLocation } = schoolSlice.actions;
export default schoolSlice.reducer;
