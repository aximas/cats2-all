import {useAppDispatch, useAppSelector} from '../../../core/utils/hooks/reduxHooks';
import React, {useEffect} from 'react';
import {BreedsBlocks} from './BreedsBlocks';

export const Breeds = () => {
    const [breeds, isLoading] = useAppSelector(({cat}) => [cat.breeds.data, cat.breeds.isLoading]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!breeds) {
            dispatch({type: 'cats/LoadBreeds'});
        }
    }, [breeds]);

    return <BreedsBlocks breeds={breeds} isLoading={isLoading} />
};