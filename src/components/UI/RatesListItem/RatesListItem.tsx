import { FC } from 'react';
import { Badge, Col, ListGroup, Row } from 'react-bootstrap';
import { Rate } from '../../../types/rate';
import styles from './RatesListItem.module.scss';
import Decimal from 'decimal.js';

interface RateListItemProps {
    rate: Rate;
}

const RatesListItem:FC<RateListItemProps> = ({ rate }) => {
    
    const badgeProps = rate.type === 'crypto'
    ? { bg: 'success', text: 'light' }
    : { bg: 'warning', text: 'dark' };

    return (
        <ListGroup.Item className={styles.list_item}>
            <Row>
                <Col className='text-start'>
                    <div className={styles.currency}>
                        {rate.symbol}
                        <Badge className={styles.badge} {...badgeProps}>
                            {rate.type}
                        </Badge>
                    </div>
                </Col>
                <Col className='text-end'>
                    <div>${new Decimal(rate.rateUsd).toFixed(18)}</div>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};

export default RatesListItem;