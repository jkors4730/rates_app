import { FC } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import { useAppSelector } from "../store/hooks/TypedHooks";

const Routes:FC = () => {
    const {token} = useAppSelector( state => state.loginReducer );

    return token ?
      null // here will be private routes
      :
      useRoutes([
        {
          path: '/',
          element: <Outlet />,
          children: [
            { index: true, element: <Login /> },
            { path: '*', element: <NotFound /> }
          ],
        },
      ])
  };
  
  export default Routes;