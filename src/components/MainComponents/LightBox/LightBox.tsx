import styles from './LightBox.module.scss';
import React, { useState } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '@core/utils/hooks/reduxHooks';
import { setActiveLightBox } from '@core/store/cat/lightBox/lightBox.slice';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/core';

export const LightBox = ({ isLoading = false }: { isLoading?: boolean }) => {
    const [dataArray, images] = useAppSelector(({ catBreed, catImage }) => [
        catBreed.breeds.current.data,
        catImage.currentBreedImages
    ]);
    const [isClosed, setIsClosed] = useState(false);

    const dispatch = useAppDispatch();

    const handleClose = () => {
        if (isClosed) dispatch(setActiveLightBox(false));
        setIsClosed(false);
    };

    return dataArray?.length ? (
        <>
            <div className={styles.overlay} />
            {isLoading ? (
                <p className={styles.loader}>Loading ...</p>
            ) : (
                <div className={styles.container}>
                    <button
                        className={styles.closeBtn}
                        aria-label='Close'
                        onClick={() => setIsClosed(true)}
                        onTransitionEnd={handleClose}>
                        <div className={styles.closeBtnInner}>
                            <label>Back</label>
                        </div>
                    </button>
                    <Splide
                        hasTrack={false}
                        options={{
                            rewind: true,
                            autoHeight: false,
                            gap: '8px',
                            autoplay: true,
                            type: 'loop'
                        }}
                        aria-label={`${dataArray[0].name} images slider`}
                        className={styles.slidersContainer}>
                        <SplideTrack className={styles.slidersTrack}>
                            {images &&
                                images.map((image) => (
                                    <SplideSlide key={image.id}>
                                        <img
                                            src={image.url}
                                            alt={dataArray[0].name}
                                            className={styles.sliderImg}
                                        />
                                    </SplideSlide>
                                ))}
                        </SplideTrack>
                    </Splide>
                </div>
            )}
        </>
    ) : (
        <div />
    );
};

export const LightBoxContainer = () => {
    const [isActive] = useAppSelector(({ lightBox }) => [lightBox.isActive]);

    return (
        <div
            className={cn(styles.lightBox, { [styles.isActive]: isActive })}
            aria-hidden='false'
            role='dialog'
            tabIndex={-1}>
            <LightBox />
        </div>
    );
};
