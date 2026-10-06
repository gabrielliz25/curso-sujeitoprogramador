import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,

    // Aqui dentro vai guardar as actions!
    reducers: {
        createUser: (state, action) => {
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                },
            };
        },
    },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
