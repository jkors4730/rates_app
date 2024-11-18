export const getTokenLocal = ():string | null => {

    if ( localStorage.getItem('token') ) {
        return localStorage.getItem('token') as string ;
    } else {
        return null;
    }
};

export const setTokenLocal = (token: string):void => {
    localStorage.setItem('token', token);
};

export const removeTokenLocal = ():void => {
    localStorage.removeItem('token');
};