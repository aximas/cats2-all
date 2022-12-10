import { takeEvery, spawn, put, call } from 'redux-saga/effects';
import { Cat } from '@core/services/cat';
import { PayloadAction } from '@reduxjs/toolkit';
import { setCurrentBreedImages } from '@core/store/cat/images/image.slice';
import { IImagesParams } from '@core/store/cat/images/image.types';

function* loadBreedImages(params: IImagesParams): Generator<any, any, any> {
    const breeds = yield call(Cat.image, params);
    yield put(setCurrentBreedImages(breeds));
}

function* loadBreedImagesWorkerSaga(action: PayloadAction<IImagesParams>) {
    yield spawn(loadBreedImages, action.payload);
}

export function* watcherBreedImagesSaga() {
    yield takeEvery('cats/LoadBreedImages', loadBreedImagesWorkerSaga);
}
