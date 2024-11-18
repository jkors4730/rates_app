import { RatesSortUnion, RatesTypeUnion } from "../types/rates_list";

//#region RatesPage
export const getRatesPageLocal = (): number => {
    if ( localStorage.getItem('rates_page') ) {
        return parseInt( localStorage.getItem('rates_page') as any );
    } else {
        return 1;
    }
};

export const setRatesPageLocal = (value: number): void => {
    localStorage.setItem( 'rates_page', value.toString() );
};

export const removeRatesPageLocal = (): void => {
    localStorage.removeItem('rates_page');
};
//#endregion

//#region RatesType
export const getRatesTypeLocal = (): RatesTypeUnion => {
    if ( localStorage.getItem('rates_type') ) {
        return localStorage.getItem('rates_type') as RatesTypeUnion;
    } else {
        return "all" as RatesTypeUnion;
    }
};

export const setRatesTypeLocal = (value: RatesTypeUnion): void => {
    localStorage.setItem( 'rates_type', value );
};

export const removeRatesTypeLocal = (): void => {
    localStorage.removeItem('rates_type');
};
//#endregion

//#region RatesQuantity
export const getRatesQuantityLocal = (): number => {
    if ( localStorage.getItem('rates_quantity') ) {
        return parseInt( localStorage.getItem('rates_quantity') as any );
    } else {
        return 10;
    }
};

export const setRatesQuantityLocal = (value: number): void => {
    localStorage.setItem( 'rates_quantity', value.toString() );
};

export const removeRatesQuantityLocal = (): void => {
    localStorage.removeItem('rates_quantity');
};
//#endregion

//#region RatesSort
export const getRatesSortLocal = (): RatesSortUnion => {
    if ( localStorage.getItem('rates_sort') ) {
        return localStorage.getItem('rates_sort') as RatesSortUnion;
    } else {
        return "none" as RatesSortUnion;
    }
};

export const setRatesSortLocal = (value: string): void => {
    localStorage.setItem( 'rates_sort', value );
};

export const removeRatesSortLocal = (): void => {
    localStorage.removeItem('rates_sort');
};
//#endregion