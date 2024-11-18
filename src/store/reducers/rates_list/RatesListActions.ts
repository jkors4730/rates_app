import { RatesSortUnion, RatesTypeUnion } from "../../../types/rates_list";
import { AppDispatch } from "../../store";
import { ratesListSlice } from "./RatesListSlice";

export const ratesListSetPage = (value: number) => async (dispatch: AppDispatch) =>  {
    dispatch( ratesListSlice.actions.rateListSetPage(value) );
};

export const ratesListSetType = (value: RatesTypeUnion) => async (dispatch: AppDispatch) =>  {
    dispatch( ratesListSlice.actions.rateListSetType(value) );
    dispatch( ratesListSlice.actions.rateListSetPage(1) );
};

export const ratesListSetQuantity = (value: number) => async (dispatch: AppDispatch) =>  {
    dispatch( ratesListSlice.actions.rateListSetQuantity(value) );
    dispatch( ratesListSlice.actions.rateListSetPage(1) );
};

export const ratesListSetSort = (value: RatesSortUnion) => async (dispatch: AppDispatch) =>  {
    dispatch( ratesListSlice.actions.rateListSetSort(value) );
};