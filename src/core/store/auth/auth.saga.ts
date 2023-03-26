import { takeEvery, spawn, put, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { ILogin } from '@core/store/auth/auth.types';
import { setAuth, setLoading } from '@core/store/auth/auth.slice';
import { Auth } from '@core/services/login';

function* loadRegistration(data: ILogin): Generator<any, any, any> {
    yield put(setLoading(true));

    const res = yield call(Auth.register, data);
    yield put(setAuth(res));
}
function* loadLogin(data: ILogin): Generator<any, any, any> {
    const res = yield call(Auth.login, data);
    if (res) yield put(setAuth(res));
}

function* loadAuthenticate(): Generator<any, any, any> {
    const res = yield call(Auth.me);
    yield put(setAuth(res));
}

function* loadLogout(): Generator<any, any, any> {
    const res = yield call(Auth.logout);

    if (res) {
        // Clear all cookies
        document.cookie.split(';').forEach((c) => {
            document.cookie = c
                .replace(/^ +/, '')
                .replace(
                    /=.*/,
                    '=;expires=' + new Date().toUTCString() + ';path=/'
                );
        });
        yield put(setAuth(null));
    }
}

function* registrationWorkerSaga(action: PayloadAction<ILogin>) {
    yield spawn(loadRegistration, action.payload);
}

function* loginWorkerSaga(action: PayloadAction<ILogin>) {
    yield spawn(loadLogin, action.payload);
}

function* authenticateWorkerSaga() {
    yield spawn(loadAuthenticate);
}

function* logoutWorkerSaga() {
    yield spawn(loadLogout);
}

export function* watcherAuthSaga() {
    yield takeEvery('auth/Registration', registrationWorkerSaga);
    yield takeEvery('auth/Login', loginWorkerSaga);
    yield takeEvery('auth/Me', authenticateWorkerSaga);
    yield takeEvery('auth/Logout', logoutWorkerSaga);
}
