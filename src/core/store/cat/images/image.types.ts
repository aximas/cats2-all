import {IBreeds} from '@core/store/cat/breeds/breed.types';

export interface IImagesParams {
    size: 'small' | 'med' | 'full',
    mime_types: string,
    format: 'json' | 'src',
    order: 'RANDOM' | 'ASC' | 'DESC',
    page: number,
    limit: number,
    category_ids: number,
    breed_ids: string,
    has_breeds: 0 | 1
}

export interface IBreedImages {
    breeds: Omit<IBreeds, 'image'>[],
    height: number,
    id: string,
    url: string,
    width: number
}

export interface IInitialState {
    currentBreedImages: IBreedImages[] | null
}