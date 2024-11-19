import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../../Menu/Menu';
import Nav from '../../Nav/Nav';
import ConvertMenu from '../../ConvertMenu/ConvertMenu';
import { usePath } from '../../../hooks/usePath';

const Layout:FC = () => {
    const path = usePath(); 

    return (
        <>
            { path !== '/convert'
                ? <Menu />
                : <ConvertMenu /> }
            <Outlet />
            <Nav/>
        </>
    );
};

export default Layout;