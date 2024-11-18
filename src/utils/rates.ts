import { Rate } from "../types/rate";

export const getRatesLocal = ():Rate[] => {
    if ( localStorage.getItem('rates') ) {
        return JSON.parse( localStorage.getItem('rates') as string ) as Rate[];
    } else {
        return [] as Rate[];
    }
};

export const setRatesLocal = (rates: Rate[]):void => {
    localStorage.setItem( 'rates', JSON.stringify(rates) );
};

export const removeRatesLocal = ():void => {
    localStorage.removeItem('rates');
};