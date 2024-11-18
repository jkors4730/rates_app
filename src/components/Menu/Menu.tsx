import { FC } from 'react';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import styles from './Menu.module.scss';
import reloadImg from '../../assets/menu/reload.svg';
import logoutImg from '../../assets/menu/logout.svg';
import { useAppDispatch } from '../../store/hooks/TypedHooks';
import { logoutAction } from '../../store/reducers/login/LoginActions';
import { fetchRates } from '../../store/reducers/rates/RatesActions';

const Menu: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <Container className={styles.container} fluid>
            <Row>
                <Col className='text-start'>
                    <Button onClick={() => dispatch( fetchRates() )} variant="light" className={styles.btn}>
                        <Image src={reloadImg} fluid />
                    </Button>
                </Col>
                <Col className='text-center'>
                    <div className={styles.title}>Rates</div>
                </Col>
                <Col className='text-end'>
                    <Button onClick={() => dispatch( logoutAction() )} variant="light" className={styles.btn}>
                        <Image src={logoutImg} fluid />
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Menu;