import { FC, useEffect, useState } from 'react';
import { Card, Container, Form, Image } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../store/hooks/TypedHooks';
import { fetchRates } from '../../store/reducers/rates/RatesActions';
import RatesLoading from '../../components/UI/RatesLoading/RatesLoading';
import Error from '../../components/UI/Error/Error';
import styles from './Convert.module.scss';
import convertImg from '../../assets/convert/converter.svg'; 
import { Rate } from '../../types/rate';
import Decimal from 'decimal.js';
import { varialPrecision } from '../../utils/convert';

const Convert:FC = () => {
    const {rates, isLoading, error} = useAppSelector( state => state.ratesReducer );
    const [from, setFrom] = useState<string>('united-states-dollar');
    const [to, setTo] = useState<string>('russian-ruble');
    const [amount, setAmount] = useState<number>(1);
    const [convertError, setConvertError] = useState<string>('');
    const dispatch = useAppDispatch();

    let ratesList = [...rates];

    ratesList.sort( (a, b) => parseFloat(b.rateUsd) - parseFloat(a.rateUsd) );

    const fromCurrency: Rate = ratesList.filter( rate => rate.id === from )[0];
    const toCurrency: Rate = ratesList.filter( rate => rate.id === to )[0];

    const convertRate = new Decimal(fromCurrency.rateUsd);
    const convertResult = new Decimal(toCurrency.rateUsd).times(convertRate).times(amount)
    .times(toCurrency.id === 'russian-ruble' ? 10000 : 1);

    const convertDirty = varialPrecision(
        convertResult.plus( convertResult.times(0.03) ),
        toCurrency.type === 'fiat'
    );
    const convertClean = varialPrecision( convertResult, toCurrency.type === 'fiat' );

    useEffect( () => {
        dispatch( fetchRates() );

        document.title = 'Convert rates | Rates App';
    }, [] );

    const fromHandler = (value: string) => {
        setFrom(value);

        if ( value === to ) {
            setConvertError('Please choose another currency!');
        }
    };

    const toHandler = (value: string) => {
        setTo(value);

        if ( value === from ) {
            setConvertError('Please choose another currency!');
        }
    };

    const amountHandler = (value: number) => {
        setAmount(value);
    };

    if ( isLoading ) {
        return <RatesLoading />
    }

    if ( error ) {
        return <Error error={error} />
    }

    return (
        <Container className={styles.container}>
            <Form className={'mt-4'}>

                <Form.Group className="mb-3">
                    <Form.Label className={styles.label}>From</Form.Label>
                    <Form.Select onChange={ (e) => fromHandler(e.target.value) } value={from}>
                        {ratesList.map( rate =>
                            <option value={rate.id} key={rate.id}>{rate.symbol}</option>
                        )}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className={styles.label}>To</Form.Label>
                    <Form.Select onChange={ (e) => toHandler(e.target.value) } value={to}>
                        {rates.map( rate =>
                            <option value={rate.id} key={rate.id}>{rate.symbol}</option>
                        )}
                    </Form.Select>
                </Form.Group>

                <br className={styles.br}/>

                <Form.Group className="mb-3">
                    <Form.Label className={styles.label}>Amount</Form.Label>
                    <Form.Control type="number" placeholder="0.00" min="0" step="1" value={amount} onChange={(e) => amountHandler( +e.target.value )} />
                </Form.Group>
            </Form>

            { fromCurrency && toCurrency &&
                <Card className={styles.card}>
                    <Card.Body>
                        { !convertError ?
                        <>
                            <div className={styles.from}>{amount} {fromCurrency.symbol}</div>
                            <div className={styles.icon}><Image src={convertImg} fluid /></div>
                            <div className={styles.to}>{convertDirty} {toCurrency.symbol}</div>
                            <div className={styles.desc}>({convertClean} {toCurrency.symbol} + 3%)</div>
                        </>
                        :
                        <div className='text-danger'>{convertError}</div>
                        }
                    </Card.Body>
                </Card>
            }
            
        </Container>
    );
};

export default Convert;