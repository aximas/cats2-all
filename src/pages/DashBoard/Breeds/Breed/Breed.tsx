import React, {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from '@core/utils/hooks/reduxHooks';
import {setCurrentBreed} from '@core/store/cat/cat.slice';
import {useParams} from 'react-router';
import imagePlaceholder from "@assets/img/placeholder-image.png";
import cn from 'classnames';


import styles from './Breed.module.scss';
import {IBreeds} from '@core/store/cat/cat.types';

export const Breed = () => {

    const {id} = useParams();

    const [dataArray, cats] = useAppSelector(({cat}) => [cat.breeds.current.data, cat.breeds.data]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(cats) dispatch({type: 'cats/LoadCurrentBreed', payload: id});
        else dispatch({type: 'cats/LoadAllBreeds', payload: id});
        return () => {
            dispatch(setCurrentBreed(null));
        };
    }, [cats]);

    const data = useMemo<IBreeds | null>(() => {
        if (dataArray) return dataArray[0];
        return null;
    }, [dataArray]);

    // @TODO: need to add Breed skeleton
    return data && <article className={styles.breed}>
        <h3 className={cn('h3', styles.breedTitle)}>
            {data.name}
        </h3>
        <img src={data.image.url || imagePlaceholder} alt="breed" className={styles.breedImg} />
        <p className={cn(styles.breedDescription, 'body')}>
            {data.description}
        </p>
        <dl className={styles.breedDescriptionList}>
            <div>
                <dt>Weight</dt>
                <dd>imperial: {data.weight.imperial},  metric: {data.weight.metric}</dd>
            </div>
            <div>
                <dt>From</dt>
                <dd>{data.origin}</dd>
            </div>
            <div>
                <dt>Life span</dt>
                <dd>{data.life_span} years</dd>
            </div>
            <div>
                <dt>From</dt>
                <dd>{data.origin}</dd>
            </div>
            <div>
                <dt>Likes indoor life</dt>
                <dd>{data.indoor}</dd>
            </div>
            <div>
                <dt>Adaptability</dt>
                <dd>{data.adaptability}</dd>
            </div>
            <div>
                <dt>Affection</dt>
                <dd>{data.affection_level}</dd>
            </div>
            <div>
                <dt>Child friendly</dt>
                <dd>{data.child_friendly}</dd>
            </div>
            <div>
                <dt>Dog friendly</dt>
                <dd>{data.dog_friendly}</dd>
            </div>
            <div>
                <dt>Energy</dt>
                <dd>{data.energy_level}</dd>
            </div>
            <div>
                <dt>Grooming</dt>
                <dd>{data.grooming}</dd>
            </div>
            <div>
                <dt>Health issues</dt>
                <dd>{data.health_issues}</dd>
            </div>
            <div>
                <dt>Intelligence</dt>
                <dd>{data.intelligence}</dd>
            </div>
            <div>
                <dt>Spread level</dt>
                <dd>{data.shedding_level}</dd>
            </div>
            <div>
                <dt>Stranger friendly level</dt>
                <dd>{data.stranger_friendly}</dd>
            </div>
            <div>
                <dt>Vocalisation</dt>
                <dd>{data.vocalisation}</dd>
            </div>
            <div>
                <dt>Experimental</dt>
                <dd>{data.experimental}</dd>
            </div>
            <div>
                <dt>Hairless</dt>
                <dd>{data.hairless}</dd>
            </div>
            <div>
                <dt>Natural</dt>
                <dd>{data.hairless}</dd>
            </div>
            <div>
                <dt>Lion level</dt>
                <dd>{data.rex}</dd>
            </div>
            <div>
                <dt>Suppressed tail</dt>
                <dd>{data.suppressed_tail}</dd>
            </div>
            <div>
                <dt>Short legs level</dt>
                <dd>{data.short_legs}</dd>
            </div>
            <div>
                <dt>Hypoallergenic</dt>
                <dd>{data.hypoallergenic}</dd>
            </div>
        </dl>
    </article>;
};