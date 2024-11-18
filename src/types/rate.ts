export interface Rate {
    id: string;
    symbol: string;
    currencySymbol: string | null;
    type: string;
    rateUsd: string;
}

export interface Rates {
    data: Rate[],
    timestamp: number;
}