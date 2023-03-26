import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { IAlert } from './alert.types';
import {
    removeAlertAction,
    setAlertAction
} from '@core/store/alert/alert.slice';

function* addAlertWorkerSaga(action: PayloadAction<IAlert>) {
    const id = Date.now().toString();
    const { payload } = action;

    yield put(setAlertAction({ ...payload, id }));

    const delay = (time: number) =>
        new Promise((resolve) => setTimeout(resolve, time));

    if (!payload.isSubmit) {
        let timeout = 2000;
        const wordsCount = payload.text.split(' ').length;

        if (wordsCount > 3) {
            const x = Math.ceil(wordsCount / 3); // reading 3 words per second
            timeout = x * 1000; // convert to milliseconds
        }

        yield call(delay, timeout);
        yield put(removeAlertAction(id));
    }
}

export function* watcherAlertSaga() {
    yield takeEvery('alert/Add', addAlertWorkerSaga);
}
