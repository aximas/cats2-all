import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IBreedImages, IInitialState} from '@core/store/cat/images/image.types';

const initialState: IInitialState = {
    currentBreedImages: null
};

const catSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        setCurrentBreedImages: ((state, action: PayloadAction<IBreedImages[] | null>) => {
            state.currentBreedImages = action.payload
        })
    }
});

export const {reducer: catImageReducer, actions: {setCurrentBreedImages}} = catSlice;
