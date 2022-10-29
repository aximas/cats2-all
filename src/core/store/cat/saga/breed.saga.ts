import {takeEvery, spawn, put, call} from 'redux-saga/effects';
import {Cat} from '../../../services/cat';
import {setBreeds, setBreedsLoading} from '../cat.slice';

function* loadBreeds(): Generator<any, any, any> {
    yield put(setBreedsLoading(true));

    const breeds = yield call(Cat.breeds);

    yield put(setBreeds(breeds));
}

function* workerBreedsSaga() {
    yield spawn(loadBreeds);
}

export function* watcherBreedsSaga() {
    yield takeEvery('cats/LoadBreeds', workerBreedsSaga);
}