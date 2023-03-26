import { IAuthStatePayload, IInitialState } from './auth.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IInitialState = {
    data: null,
    isLogged: false,
    isLoading: false
};

const authSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<IAuthStatePayload | null>) => {
            if (action.payload) {
                const { success, ...payload } = action.payload;
                return {
                    ...state,
                    data: payload,
                    isLogged: success,
                    isLoading: false
                };
            } else {
                return { data: null, isLogged: false, isLoading: false };
            }
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
});

export const {
    reducer: authReducer,
    actions: { setAuth, setLoading }
} = authSlice;
