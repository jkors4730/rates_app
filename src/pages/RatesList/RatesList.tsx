import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/TypedHooks';
import { fetchRates } from '../../store/reducers/rates/RatesActions';
import { Container, ListGroup } from 'react-bootstrap';
import { RatesSortUnion, RatesTypeUnion } from '../../types/rates_list';
import RatesListParams from '../../components/UI/RatesListParams/RateListParams';
import RatesListItem from '../../components/UI/RatesListItem/RatesListItem';
import { ratesListSetPage, ratesListSetQuantity, ratesListSetSort, ratesListSetType } from '../../store/reducers/rates_list/RatesListActions';
import RatesListPagination from '../../components/UI/RatesListPagination/RatesListPagination';
import styles from './RatesList.module.scss';
import RatesLoading from '../../components/UI/RatesLoading/RatesLoading';
import Error from '../../components/UI/Error/Error';

const RatesList:FC = () => {
    const {page, type, quantity, sort} = useAppSelector( state => state.ratesListReducer );
    const {rates, isLoading, error} = useAppSelector( state => state.ratesReducer );
    const dispatch = useAppDispatch();

    useEffect( () => {
        dispatch( fetchRates() );

        document.title = 'Actual rates | Rates App';

        const timerId = setInterval( () => {
            dispatch( fetchRates(true) ); // fetch Rates without loading indicator
        }, 30 * 1000 );

        return () => {
            clearInterval(timerId);
        };
    }, [] );

    let ratesList = [...rates];
    let ratesListCount = 0;

    //#region Pagination and Filter logic
    if ( type !== "all" ) {
        ratesList = ratesList.filter( rate => rate.type === type );
    }

    if ( sort !== "none" ) {
        if ( sort === "asc" ) {
            ratesList.sort( (a, b) => parseFloat(a.rateUsd) - parseFloat(b.rateUsd) );
        } else if ( sort === "desc" ) {
            ratesList.sort( (a, b) => parseFloat(b.rateUsd) - parseFloat(a.rateUsd) );
        }
    }
    ratesListCount = ratesList.length;
    ratesList = ratesList.slice((page * quantity) - quantity, quantity * page);
    //#endregion

    //#region Handlers
    const setPageHandler = (value: number): void => {
        dispatch( ratesListSetPage(value) );
        window.scrollTo(0, 0);
    };

    const setTypeHandler = (value: RatesTypeUnion): void => {
        dispatch( ratesListSetType(value) );
    };

    const setQuantityHandler = (value: number): void => {
        dispatch( ratesListSetQuantity(value) );
    };

    const setSortHandler = (value: RatesSortUnion): void => {
        dispatch( ratesListSetSort(value) );
    };
    //#endregion

    if ( isLoading ) {
        return <RatesLoading />
    }

    if ( error ) {
        return <Error error={error} />
    }

    return (
        <Container className={styles.container} fluid>
            <RatesListParams {...{ type, quantity, sort,
                setType: setTypeHandler,
                setQuantity: setQuantityHandler,
                setSort: setSortHandler }}
            />

            <ListGroup>
                {ratesList.map( rate =>
                    <RatesListItem rate={rate} key={rate.id} />
                )}
            </ListGroup>

            <RatesListPagination {...{ page, quantity,
                maxCount: ratesListCount,
                setPage: setPageHandler
             }}
            />
        </Container>
    );
};

export default RatesList;