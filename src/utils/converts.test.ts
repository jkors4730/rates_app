import Decimal from "decimal.js";
import { varialPrecision } from "./convert";

describe( 'Varial precission', () => {

    test('Fiat has 2 decimal places', () => {
        expect(varialPrecision(new Decimal('0.111111111111111111'), true)).toHaveLength(4);
    });

    test('Crypto has 18 decimal places', () => {
        expect(varialPrecision(new Decimal('0.111111111111111111'), false)).toHaveLength(20);
    });
} );