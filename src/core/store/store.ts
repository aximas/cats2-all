import { configureStore } from '@reduxjs/toolkit';
import createMiddleware from 'redux-saga';
import { catBreedReducer } from './cat/breeds/breed.slice';
import { catImageReducer } from './cat/images/image.slice';
import { lightBoxReducer } from './cat/lightBox/lightBox.slice';

import rootSaga from './cat/cat.saga';

const reducer = {
    catBreed: catBreedReducer,
    catImage: catImageReducer,
    lightBox: lightBoxReducer
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
