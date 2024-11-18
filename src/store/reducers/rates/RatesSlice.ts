import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRatesLocal, setRatesLocal } from "../../../utils/rates";
import { Rate } from "../../../types/rate";

interface RatesState {
    rates: Rate[];
    isLoading: boolean;
    error: string;
}

const initialState: RatesState = {
    rates: getRatesLocal(),
    isLoading: false,
    error: '',
};

export const ratesSlice = createSlice( {
    name: 'rates',
    initialState,
    reducers: {
        ratesStart(state) {
            state.isLoading = true;
        },
        ratesSuccess(state, action: PayloadAction<Rate[]>) {
            state.isLoading = false;
            state.error = '';
            state.rates = action.payload;
            setRatesLocal(action.payload);
        },
        ratesError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
} );

export default ratesSlice.reducer;