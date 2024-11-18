import { FC } from 'react';
import { Container } from 'react-bootstrap';
import styles from './NotFound.module.scss';

const NotFound: FC = () => {
    return (
        <Container className={styles.container}>
            <h1 className='text-danger'>Error 404</h1>
            <div className={styles.break}></div>
            <div className='text-muted'>Sorry, this page does not exist</div>
        </Container>
    );
};

export default NotFound;