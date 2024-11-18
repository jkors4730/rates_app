import { FC } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import styles from './RateListParams.module.scss';
import { RatesTypeUnion, RatesSortUnion } from '../../../types/rates_list';

interface RateListParamsProps {
    type: RatesTypeUnion;
    setType(value: RatesTypeUnion): void;
    quantity: number;
    setQuantity(value: number): void;
    sort: RatesSortUnion;
    setSort(value: RatesSortUnion): void;
}

const RatesListParams: FC<RateListParamsProps> = ({
    type,
    setType,
    quantity,
    setQuantity,
    sort,
    setSort
}) => {
    return (
        <Row className={styles.params}>
            <Col>
                <Form>
                    <Form.Select size="sm" value={type} onChange={(e) => setType(e.target.value as RatesTypeUnion)}>
                        <option value="all">All</option>
                        <option value="crypto">Crypto</option>
                        <option value="fiat">Fiat</option>
                    </Form.Select>
                </Form>
            </Col>
            <Col>
                <Form>
                    <Form.Select size="sm" value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </Form.Select>
                </Form>
            </Col>
            <Col>
            <Form>
                <Form.Select size="sm" value={sort} onChange={(e) => setSort(e.target.value as RatesSortUnion)}>
                    <option value="none">None</option>
                    <option value="asc">ASC</option>
                    <option value="desc">DESC</option>
                </Form.Select>
                </Form>
            </Col>
        </Row>
    );
};

export default RatesListParams;