import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IInitialState} from './lightBox.types';

const initialState: IInitialState = {
    isActive: false
};

const lightBoxSlice = createSlice({
    name: 'lightBox',
    initialState,
    reducers: {
        setActiveLightBox: ((state, action: PayloadAction<boolean>) => {
            state.isActive = action.payload
        })
    }
});

export const {reducer: lightBoxReducer, actions: {setActiveLightBox}} = lightBoxSlice;
