import {takeEvery, spawn, put, call} from 'redux-saga/effects';
import {Cat} from '@core/services/cat';
import {setBreeds, setBreedsLoading, setTotalCount} from '../cat.slice';
import {PayloadAction} from '@reduxjs/toolkit';
import {TParams} from '@core/store/cat/cat.types';

function* loadBreeds(params: TParams): Generator<any, any, any> {
    yield put(setBreedsLoading(true));

    const breeds = yield call(Cat.breeds, params);

    yield put(setBreeds(breeds));
}

function* loadAllBreeds(): Generator<any, any, any> {

    const breeds = yield call(Cat.breeds, null);

    yield put(setBreeds(breeds));
    yield put(setTotalCount(breeds.length));
}

function* loadBreedsWorkerSaga(action: PayloadAction<TParams>) {
    yield spawn(loadBreeds, action.payload);
}

function* loadAllBreedsWorkerSaga() {
    yield spawn(loadAllBreeds);
}

export function* watcherBreedsSaga() {
    yield takeEvery('cats/LoadBreeds', loadBreedsWorkerSaga);
    yield takeEvery('cats/LoadAllBreeds', loadAllBreedsWorkerSaga);

}