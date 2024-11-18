import { FC } from 'react';
import { Pagination } from 'react-bootstrap';

interface RatesListPaginationProps {
    page: number;
    quantity: number;
    maxCount: number;
    setPage(value: number): void;
}

const RatesListPagination:FC<RatesListPaginationProps> = ({
    page,
    quantity,
    maxCount,
    setPage
}) => {
    const pagesMin = page - 2 > 1 ? page - 2 : 1;
    const pagesMax = Math.ceil( maxCount / quantity );
    const pagesCount = page + 2 < pagesMax ? page + 2 : pagesMax;

    let pages = [];

    for (let num = pagesMin; num <= pagesCount; num++) {
        pages.push(
            <Pagination.Item
                onClick={() => setPage(num)}
                active={num === page}
                key={num}>
                {num}
            </Pagination.Item>,
        );
    }

    return (
        <>
        <div className='mt-2 text-muted text-center'>{Math.min(quantity * page, maxCount)} / { maxCount }</div>
        <Pagination className='mt-2'>
            {page - 2 > 1 &&
            <>
                <Pagination.Item onClick={() => setPage(1)} key={1}>{1}</Pagination.Item>
                <Pagination.Ellipsis />
            </>}

            {pages}

            {pagesMax > 3 && page + 2 < pagesMax &&
            <>
                <Pagination.Ellipsis />
                <Pagination.Item onClick={() => setPage(pagesMax)} key={pagesMax}>{pagesMax}</Pagination.Item>
            </>}
        </Pagination>
        </>
    );
};

export default RatesListPagination;