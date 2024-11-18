import axios from "axios";
import { AppDispatch } from "../../store";
import { loginSlice } from "./LoginSlice";
import { User } from "../../../types/user";

export const loginAction = ( login: string, password: string ) => async (dispatch: AppDispatch) => {
    try {
        dispatch(loginSlice.actions.loginStart());

        // тестовая логика (ищем юзера по логопасу в массиве)
        const res = await axios.get<User[]>('./users.json'); // запрашиваем локальный файл

        const user = res.data.filter( user => user.login === login && user.password === password );

        if ( user.length ) {
            dispatch(loginSlice.actions.loginSuccess( user[0].token ));
        } else {
            dispatch(loginSlice.actions.loginError('Wrong login or password!'));
        }
    }
    catch (e: any) {
        dispatch(loginSlice.actions.loginError(e.message));
    }
};

export const logoutAction = () => (dispatch: AppDispatch) => {
    dispatch( loginSlice.actions.logout() );
};