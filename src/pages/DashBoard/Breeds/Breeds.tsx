import { useAppDispatch, useAppSelector } from '@core/utils/hooks/reduxHooks';
import React, { useEffect, useState } from 'react';
import { BreedsBlocks } from './BreedsBlocks';

export const Breeds = () => {
    // Redux hooks
    const [breeds, isLoading, totalNumber] = useAppSelector(({ catBreed }) => [
        catBreed.breeds.data,
        catBreed.breeds.isLoading,
        catBreed.breeds.totalCount
    ]);
    const dispatch = useAppDispatch();

    // React hooks
    const [limit, setLimit] = useState(10);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (breeds && isFetching) return setIsFetching(false);

        if (!breeds) dispatch({ type: 'cats/LoadAllBreeds' });
    }, [breeds, dispatch, limit]);

    useEffect(() => {
        if (limit < totalNumber && isFetching)
            setLimit((prevState) => prevState + 10);
    }, [isFetching]);

    function handleScroll() {
        if (
            document.documentElement.offsetHeight -
                (window.innerHeight + document.documentElement.scrollTop) <
            100
        ) {
            setIsFetching(true);
        }
    }

    return (
        <BreedsBlocks
            breeds={breeds && breeds?.slice(0, limit)}
            isLoading={isLoading}
        />
    );
};
