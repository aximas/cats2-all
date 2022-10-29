import {configureStore} from '@reduxjs/toolkit';
import createMiddleware from 'redux-saga';
import {catReducer} from './cat/cat.slice';
import rootSaga from './cat/cat.saga';

const reducer = {
    cat: catReducer,
    // image: imageReducer,
    // vote: voteReducer,
    // like: likeReducer
}

const SagaMiddleware = createMiddleware();

export const store = configureStore({
    reducer,
    middleware:[SagaMiddleware]
});

SagaMiddleware.run(rootSaga);