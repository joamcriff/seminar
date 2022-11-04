import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import callAPI from "../API";

export const fecthAsyncGetAlbums = createAsyncThunk(
    'fecthAsyncGetAlbums',
    async (arg) => {
        const res = await callAPI("albums", "get", null)
        return res.data
    }
)

const initialState = {
    albums: [],
}

const Reducer = createSlice({
    name: "test",
    initialState,
    extraReducers: {
        [fecthAsyncGetAlbums.fulfilled]: (state, action) => {
            return { ...state, albums: action.payload }
          },
    }
})

export const reducer = Reducer.reducer;