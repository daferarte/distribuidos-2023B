import { createSlice } from '@reduxjs/toolkit';

let userSlice = createSlice({
    name: 'user',
    initialState:{
        user:null,
        status:''
    },
    reducers: {
        signIn: (state, action) => {
            state.user = action.payload;
        },
        logOut: (state) => {
            state.user = null;
        }
    }
});

export const { signIn, logOut } = userSlice.actions;

export default userSlice.reducer;