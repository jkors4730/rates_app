import { FC, useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import ratesNormal from '../../assets/nav/rates_normal.svg';
import ratesActive from '../../assets/nav/rates_active.svg';
import convertNormal from '../../assets/nav/convert_normal.svg';
import convertActive from '../../assets/nav/convert_active.svg';
import { useNavigate } from 'react-router-dom';
import styles from './Nav.module.scss';

enum NavState {
    RATES = 'rates',
    CONVERT = 'convert'
}

const Nav:FC = () => {
    const [active, setActive] = useState<string>(NavState.RATES);
    const navigate = useNavigate();

    useEffect( () => {
        switch ( location.pathname ) {
            case '/':
                setActive(NavState.RATES);
                break;
            case '/convert':
                setActive(NavState.CONVERT);
                break;
        }
    }, [] );

    const goTo = (type: NavState) => {
        setActive(type);

        if ( type === NavState.RATES
            && location.pathname !== '/' ) {
            navigate('/');
        }

        if ( type === NavState.CONVERT
            && location.pathname !== '/convert' ) {
            navigate('/convert');
        }
    };

    return (
        <Container className={styles.container} fluid>
            <Row>
                <Col onClick={() => goTo(NavState.RATES)} className='text-center'>
                    <Image src={active === NavState.RATES
                        ? ratesActive
                        : ratesNormal} 
                        className={styles.img}
                        fluid
                        />
                </Col>
                <Col onClick={() => goTo(NavState.CONVERT)} className='text-center'>
                    <Image src={active === NavState.CONVERT
                        ? convertActive
                        : convertNormal} 
                        className={styles.img}
                        fluid
                        />
                </Col>
            </Row>
        </Container>
    );
};

export default Nav;