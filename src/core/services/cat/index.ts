import { API } from '@core/config/api';
import { TParams } from '@core/store/cat/breeds/breed.types';
import { getSearchParams } from '@core/utils/helpers/getSearchParams';
import { IImagesParams } from '@core/store/cat/images/image.types';

export const Cat = {
    async breeds(params: TParams) {
        const limitParam = params?.limit ? 'limit=' + params.limit : '';
        const pageParam = params?.page ? '&page=' + (params.page - 1) : '';

        const breeds = await fetch(`${API.breeds}?${limitParam}${pageParam}`);
        return breeds.json();
    },
    async image(queryParams: Partial<IImagesParams> = {}) {
        console.log('queryParams', queryParams);
        const assignedParams = new URLSearchParams(
            getSearchParams(queryParams)
        );

        const breeds = await fetch(`${API.images}/search?${queryParams}`);
        return breeds.json();
    }
};
