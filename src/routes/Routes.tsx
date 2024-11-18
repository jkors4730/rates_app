import { FC } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import { useAppSelector } from "../store/hooks/TypedHooks";
import Layout from "../components/UI/Layout/Layout";
import RatesList from "../pages/RatesList/RatesList";
import Convert from "../pages/Convert/Convert";

const Routes:FC = () => {
    const {token} = useAppSelector( state => state.loginReducer );

    return token ?
      useRoutes([
        {
          path: '/',
          element: <Layout />,
          children: [
            { index: true, element: <RatesList /> },
            { path: 'convert', element: <Convert /> },
            { path: '*', element: <NotFound /> },
          ],
        },
      ])
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