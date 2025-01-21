import { createSlice } from "@reduxjs/toolkit";

const RequestSlice = createSlice({
    name: "requests",
    initialState: [],
    reducers: {
        addRequests: (state,action) => {
            return action.payload;
        }
    }
});

export const {addRequests} = RequestSlice.actions;
export default RequestSlice.reducer;