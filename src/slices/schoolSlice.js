import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../services/apiGeocoding";

function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  "school/fetchAddress",
  async () => {
    // 1) we get the user geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };
    // 2) use the reverse geocoding API to get the address
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    // Payload of the fullfiled state
    return { position, address };
  }
);

const initialState = {
  schoolName: "",
  location: {},
  status: "idle",
  error: null,
};

export const schoolSlice = createSlice({
  name: "school",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = "error";
        state.error =
          "There was a problem getting your address. Please make sure fill this field!";
      });
  },
});

// export const { setSchoolName } = schoolSlice.actions;
export default schoolSlice.reducer;
