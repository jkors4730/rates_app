import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../../Menu/Menu';
import Nav from '../../Nav/Nav';

const Layout:FC = () => {
    return (
        <>
            <Menu />
            <Outlet />
            <Nav/>
        </>
    );
};

export default Layout;