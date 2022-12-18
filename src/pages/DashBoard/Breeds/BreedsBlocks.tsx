import React from 'react';
import styles from './Breeds.module.scss';
import { IBreeds } from '@core/store/cat/breeds/breed.types';
import imagePlaceholder from '@assets/img/placeholder-image.png';
import { Link } from 'react-router-dom';

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
            return (
                <article className={styles.breedsItem} key={breed.id}>
                    <Link to={`/breeds/${breed.id}`}>
                        <img
                            src={
                                breed.image ? breed.image.url : imagePlaceholder
                            }
                            alt={breed.name}
                            loading='lazy'
                        />
                    </Link>
                    <div className={styles.breedInfo}>
                        <p className={styles.breedTag}>{breed.origin}</p>
                        <h3 className='h5'>{breed.name}</h3>
                        <p className={styles.breedDescription}>
                            {breed.description}
                        </p>
                    </div>
                </article>
            );
        });
    };

    return (
        <div className={styles.breedsWrapper}>
            <h2 className='h4'>Cats breeds</h2>
            <div className={styles.breeds}>{renderBreed()}</div>
        </div>
    );
};
