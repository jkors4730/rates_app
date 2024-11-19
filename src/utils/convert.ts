import Decimal from "decimal.js";

export const varialPrecision = (num: Decimal, flag: boolean): string => {
    return flag
        ? num.toFixed(2).toString()
        : num.toFixed(18).toString();
}