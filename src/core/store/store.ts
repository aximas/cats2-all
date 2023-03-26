import { configureStore } from '@reduxjs/toolkit';
import createMiddleware from 'redux-saga';
import { catBreedReducer } from './cat/breeds/breed.slice';
import { catImageReducer } from './cat/images/image.slice';
import { authReducer } from '@core/store/auth/auth.slice';
import { lightBoxReducer } from './cat/lightBox/lightBox.slice';
import { alertReducer } from '@core/store/alert/alert.slice';

import rootSaga from './cat/cat.saga';

const reducer = {
    catBreed: catBreedReducer,
    catImage: catImageReducer,
    lightBox: lightBoxReducer,
    auth: authReducer,
    alert: alertReducer
    // image: imageReducer,
    // vote: voteReducer,
    // like: likeReducer
};

const SagaMiddleware = createMiddleware();

export const store = configureStore({
    reducer,
    middleware: [SagaMiddleware]
});

SagaMiddleware.run(rootSaga);
