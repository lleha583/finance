import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUser = createAsyncThunk("user/data", async () => {
  const dataFetch = await fetch(
    "https://api.jsonbin.io/v3/b/66a8dc7fad19ca34f88ef50d",
    {
      method: "GET",
      headers: {
        "X-Master-Key":
          "$2a$10$.qwR4ivgwYmt0svX8dJ0heS1oXkqsdFhDW1gWMSF01PGXqOY6WV0y",
        "Content-Type": "application/json",
      },
    }
  );
  const dataResult = await dataFetch.json();
  return dataResult;
});

const userSlice = createSlice({
  name: "counter",
  initialState: {
    status: "",
    record: {},
    metaData: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      console.log(action.meta.requestStatus);
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.record = action.payload.record;
      state.status = action.meta.requestStatus;
      state.metaData = action.payload.metadata;
      return;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log(action.meta);
    });
  },
});

export const {} = userSlice.reducer;
export default userSlice.reducer;
