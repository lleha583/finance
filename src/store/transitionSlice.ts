import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ICard, ITransitions } from "../interface/interface";

export const fetchUserData = createAsyncThunk(
  "transition/data", 
  async (props: string) => {
    const urlTransition = props;
    const dataFetch = await fetch(urlTransition,{
      method: "GET",
      headers: {
        "X-Master-Key": "$2a$10$.qwR4ivgwYmt0svX8dJ0heS1oXkqsdFhDW1gWMSF01PGXqOY6WV0y",
        "Content-Type": "application/json/name",
      }});
  const dataResult = await dataFetch.json();
  return dataResult;
});

const userDataSlice = createSlice({
  name: "transition",
  initialState: {
    status: "",
    transition: [] as ITransitions[],
    card: [] as ICard[]
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
        if(action.payload.record["transitions"]) {
          state.status = action.meta.requestStatus;
          state.transition = action.payload.record.transitions;
          return;
        }

        if(action.payload.record["card"]) {
          state.status = action.meta.requestStatus;
          state.card = action.payload.record.card;
          return;
        }
      return;
    });
  },
});

export default userDataSlice.reducer;
