import styles from '@pages/DashBoard/Breeds/Breeds.module.scss';
import { Link } from 'react-router-dom';
import imagePlaceholder from '@assets/img/placeholder-image.png';
import { BreedImageSkeleton } from '@skeletons/Breeds/BreedImage.skeleton';
import React from 'react';
import { IBreeds } from '@core/store/cat/breeds/breed.types';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';

export const BreedsBlock = ({ breed }: { breed: IBreeds }) => {
    const [ref, inView] = useInView({
        threshold: 0.6,
        triggerOnce: true
    });

    return (
        <article className={styles.breedsItem} key={breed.id} ref={ref}>
            <Link
                to={`/breeds/${breed.id}`}
                className={cn(styles.breedsItemLink, {
                    [styles.notLink]: !inView
                })}>
                {inView ? (
                    <img
                        src={
                            breed.reference_image_id
                                ? `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`
                                : imagePlaceholder
                        }
                        alt={breed.name}
                        loading='lazy'
                        onError={(event) => {
                            event.currentTarget.src = `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.png`;
                        }}
                    />
                ) : (
                    <BreedImageSkeleton />
                )}
            </Link>
            <div className={styles.breedInfo}>
                <p className={styles.breedTag}>{breed.origin}</p>
                <h3 className='h5'>{breed.name}</h3>
                <p className={styles.breedDescription}>{breed.description}</p>
            </div>
        </article>
    );
};
