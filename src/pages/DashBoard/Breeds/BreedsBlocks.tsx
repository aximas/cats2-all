import React from 'react';

import styles from './Breeds.module.scss';
import {Breeds} from '@core/store/cat/cat.slice';
import imagePlaceholder from '@assets/img/placeholder-image.png';

export const BreedsBlocks = ({breeds, isLoading}: { breeds: Breeds[] | null, isLoading: boolean }) => {
    // TODO: need to add breeds skeleton
    if (isLoading) return <p>Please wait, loading</p>
    if (!isLoading && !breeds) return <p>Sorry breed not found</p>;

    const renderBreed = () => {
        return breeds?.map(breed => {
          return <article className={styles.breedsItem} key={breed.id}>
              <img src={breed.image ? breed.image.url : imagePlaceholder}  alt={`${breed.name} photo`} />
              <div className={styles.breedInfo}>
                  <p className={styles.breedTag}>Breed</p>
                  <h3 className='h5'>
                      {breed.name}
                  </h3>
                  <p className={styles.breedDescription}>
                      {breed.description}
                  </p>
              </div>
            </article>
        })
    }

    return <div className={styles.breedsWrapper}>
            <h2 className='h4'>
                Cats breeds
            </h2>
            <div className={styles.breeds}>
                {renderBreed()}
            </div>
        </div>
};