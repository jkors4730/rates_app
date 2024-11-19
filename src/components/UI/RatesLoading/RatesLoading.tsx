import { FC } from 'react';
import { Container, Image } from 'react-bootstrap';
import loading from '../../../assets/rates/rates_loading.svg';
import styles from './RatesLoading.module.scss';

const RatesLoading:FC = () => {
    return (
        <Container className={styles.loading} fluid>
            <Image src={loading} fluid className={styles.img} />
        </Container>
    );
};

export default RatesLoading;