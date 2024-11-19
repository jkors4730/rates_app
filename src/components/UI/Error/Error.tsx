import { FC } from 'react';
import { Container } from 'react-bootstrap';
import styles from './Error.module.scss';

interface ErrorProps {
    error: string;
}

const Error: FC<ErrorProps> = ({ error }) => {
    return (
        <Container className={styles.loading} fluid>
            <div className='text-danger'>{error}</div>
        </Container>
    );
};

export default Error;