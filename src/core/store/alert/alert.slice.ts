import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAlert } from './alert.types';

export const initialState: IAlert[] = [];

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setAlertAction: (state, action: PayloadAction<IAlert>) => {
            const isExists = state.some(
                (alert) => alert.text === action.payload.text
            );
            if (!isExists) return [...state, action.payload];
        },
        removeAlertAction: (state, action: PayloadAction<string>) => {
            return state.filter((alert) => alert.id !== action.payload);
        }
    }
});

export const {
    actions: { setAlertAction, removeAlertAction },
    reducer: alertReducer
} = alertSlice;
