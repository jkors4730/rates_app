import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RatesSortUnion, RatesTypeUnion } from "../../../types/rates_list";
import { getRatesPageLocal, getRatesQuantityLocal, getRatesSortLocal, getRatesTypeLocal, setRatesPageLocal, setRatesQuantityLocal, setRatesSortLocal, setRatesTypeLocal } from "../../../utils/rates_list";

interface RatesListState {
    page: number;
    type: RatesTypeUnion;
    quantity: number;
    sort: RatesSortUnion;
}

const initialState: RatesListState = {
    page: getRatesPageLocal(),
    type: getRatesTypeLocal(),
    quantity: getRatesQuantityLocal(),
    sort: getRatesSortLocal()
};

export const ratesListSlice = createSlice( {
    name: 'rates_list',
    initialState,
    reducers: {
        // page
        rateListSetPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
            setRatesPageLocal(action.payload);
        },
        // type
        rateListSetType(state, action: PayloadAction<RatesTypeUnion>) {
            state.type = action.payload;
            setRatesTypeLocal(action.payload);
        },
        // quantity
        rateListSetQuantity(state, action: PayloadAction<number>) {
            state.quantity = action.payload;
            setRatesQuantityLocal(action.payload);
        },
        // quantity
        rateListSetSort(state, action: PayloadAction<RatesSortUnion>) {
            state.sort = action.payload;
            setRatesSortLocal(action.payload);
        },
    }
} );

export default ratesListSlice.reducer;