import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Breeds, InitialState} from './cat.types';

const initialState: InitialState = {
    breeds: {
        data: null,
        isLoading: false,
        totalCount: 0
    }
};

const catSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        setBreeds: ((state, action:PayloadAction<Breeds[]>) => {
            if (action.payload) return {...state, breeds: {totalCount: state.breeds.totalCount, isLoading: false, data: action.payload}};
            return {...state, breeds: { totalCount: state.breeds.totalCount, isLoading: false, data: action.payload}};
        }),
        setBreedsLoading: ((state, action:PayloadAction<boolean>) => {
            if(action.payload) return {...state, breeds: {totalCount: state.breeds.totalCount, isLoading: true, data: state.breeds.data}}
        }),
        setTotalCount: ((state, action:PayloadAction<number>) => {
            if(action.payload) state.breeds.totalCount = action.payload
        })
    }
});

export const {reducer: catReducer, actions: {setBreeds, setBreedsLoading, setTotalCount}} = catSlice;
