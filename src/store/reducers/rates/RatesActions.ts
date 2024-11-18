import axios from "axios";
import { AppDispatch } from "../../store";
import { ratesSlice } from "./RatesSlice";
import { Rate, Rates } from "../../../types/rate";

export const fetchRates = (silent: boolean = false) => async (dispatch: AppDispatch) => {
    try {
        if ( !silent ) {
            dispatch(ratesSlice.actions.ratesStart());
            console.log('fetchRates (componentDidMount)');
        } else {
            console.log('fetchRates (silent update)');
        }

        const res = await axios.get<Rates>('https://api.coincap.io/v2/rates');

        if ( res.data.data.length ) {
            
            const rates: Rate[] = res.data.data.map( (rate: any) => {
                return {
                    id: rate.id,
                    symbol: rate.symbol,
                    currencySymbol: rate.currencySymbol,
                    type: rate.type,
                    rateUsd: rate.rateUsd,
                } as Rate
            } );

            // console.log('Rates', rates);

            dispatch(ratesSlice.actions.ratesSuccess( rates ));
        }
        else {
            dispatch(ratesSlice.actions.ratesError('Error: Fetching rates'));
        }
    }
    catch (e: any) {
        dispatch(ratesSlice.actions.ratesError(e.message));
    }
};