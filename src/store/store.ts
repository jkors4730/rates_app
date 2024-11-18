import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/login/LoginSlice';
import ratesReducer from './reducers/rates/RatesSlice';
import ratesListReducer from './reducers/rates_list/RatesListSlice';

const rootReducer = combineReducers( {
    loginReducer,
    ratesReducer,
    ratesListReducer
} );

export const setupStore = () => {
    return configureStore( {
        reducer: rootReducer
    } );
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']