import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBreeds, IInitialState } from './breed.types';

const initialState: IInitialState = {
    breeds: {
        data: null,
        isLoading: false,
        totalCount: 0,
        current: {
            data: null
        }
    }
};

const breedSlice = createSlice({
    name: 'breeds',
    initialState,
    reducers: {
        setBreeds: (state, action: PayloadAction<IBreeds[]>) => {
            if (action.payload)
                return {
                    ...state,
                    breeds: {
                        totalCount: state.breeds.totalCount,
                        isLoading: false,
                        data: action.payload,
                        current: state.breeds.current
                    }
                };
            return {
                ...state,
                breeds: {
                    totalCount: state.breeds.totalCount,
                    isLoading: false,
                    data: action.payload,
                    current: state.breeds.current
                }
            };
        },
        setBreedsLoading: (state, action: PayloadAction<boolean>) => {
            if (action.payload)
                return {
                    ...state,
                    breeds: {
                        totalCount: state.breeds.totalCount,
                        isLoading: true,
                        data: state.breeds.data,
                        current: state.breeds.current
                    }
                };
        },
        setTotalCount: (state, action: PayloadAction<number>) => {
            if (action.payload) state.breeds.totalCount = action.payload;
        },
        setCurrentBreed: (state, action: PayloadAction<string | null>) => {
            state.breeds.current.data = state.breeds.data
                ? state.breeds.data.filter((breed) => {
                      return breed.id === action.payload;
                  })
                : null;
        }
    }
});

export const {
    reducer: catBreedReducer,
    actions: { setBreeds, setBreedsLoading, setTotalCount, setCurrentBreed }
} = breedSlice;
