import {API} from '@core/config/api';
import {TParams} from '@core/store/cat/cat.types';

export const Cat = {
    async breeds(params : TParams) {

        const limitParam = params?.limit ? 'limit=' + params.limit : '';
        const pageParam = params?.page ? '&page=' + (params.page -1) : '';

        const breeds = await fetch(`${API.breeds}?${limitParam}${pageParam}`);
        return breeds.json();
    }
};