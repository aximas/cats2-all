import {API} from '../../config/api';

export const Cat = {
    async breeds() {
        const breeds = await fetch(API.breeds);
        return breeds.json();
    }
};