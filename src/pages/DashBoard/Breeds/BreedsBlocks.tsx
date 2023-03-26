import React from 'react';
import styles from './Breeds.module.scss';
import { IBreeds } from '@core/store/cat/breeds/breed.types';
import { BreedsBlock } from '@pages/DashBoard/Breeds/BreedsBlock';

export const BreedsBlocks = ({
    breeds,
    isLoading
}: {
    breeds: IBreeds[] | null;
    isLoading: boolean;
}) => {
    // TODO: need to add breeds skeleton
    if (isLoading) return <p>Please wait, loading</p>;
    if (!isLoading && !breeds) return <p>Sorry breed not found</p>;

    const renderBreed = () => {
        return breeds?.map((breed) => {
            return <BreedsBlock breed={breed} key={breed.id} />;
        });
    };

    return (
        <div className={styles.breedsWrapper}>
            <h2 className='h4'>Cats breeds</h2>
            <div className={styles.breeds}>{renderBreed()}</div>
        </div>
    );
};
