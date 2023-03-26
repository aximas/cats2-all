import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './BreedImage.module.scss';

export const BreedImageSkeleton = () => {
    return (
        <ContentLoader
            preserveAspectRatio='none'
            backgroundColor='#e3e9ef'
            foregroundColor='#fff'
            width='100%'
            height='100%'
            className={styles.breedImage}
            speed={2}>
            <rect x='0' y='0' width='100%' height='100%' />
        </ContentLoader>
    );
};
