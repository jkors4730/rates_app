import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTokenLocal, removeTokenLocal, setTokenLocal } from "../../../utils/token";

interface LoginState {
    token: string | null;
    isLoading: boolean;
    error: string;
}

const initialState: LoginState = {
    token: getTokenLocal(),
    isLoading: false,
    error: '',
};

export const loginSlice = createSlice( {
    name: 'login',
    initialState,
    reducers: {
        loginStart(state) {
            state.isLoading = true;
        },
        loginSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = '';
            state.token = action.payload;
            setTokenLocal(action.payload);
        },
        loginError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.isLoading = false;
            state.token = null;
            removeTokenLocal();
        }
    }
} );

export default loginSlice.reducer;