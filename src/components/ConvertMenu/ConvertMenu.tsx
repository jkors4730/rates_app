import { FC } from 'react';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import { useAppDispatch } from '../../store/hooks/TypedHooks';
import { logoutAction } from '../../store/reducers/login/LoginActions';
import logoutImg from '../../assets/menu/logout.svg';
import styles from './ConvertMenu.module.scss';

const ConvertMenu: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <Container className={styles.container} fluid>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.title}>Convert</div>
                    </Col>
                    <Col className='text-end'>
                        <Button onClick={() => dispatch( logoutAction() )} variant="light" className={styles.btn}>
                            <Image src={logoutImg} fluid />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default ConvertMenu;