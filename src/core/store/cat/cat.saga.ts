import { spawn, call, all } from 'redux-saga/effects';
import { watcherBreedsSaga } from './breeds/breed.saga';
import { watcherBreedImagesSaga } from '@core/store/cat/images/image.saga';
import { watcherAuthSaga } from '@core/store/auth/auth.saga';
import { watcherAlertSaga } from '@core/store/alert/alert.saga';

function* rootSaga(): Generator {
    const sagas = [
        watcherBreedsSaga,
        watcherBreedImagesSaga,
        watcherAuthSaga,
        watcherAlertSaga
    ];

    const retrySagas = sagas.map((saga) => {
        return spawn(function* () {
            while (true) {
                try {
                    yield call(saga);
                    break;
                } catch (e) {
                    console.log(e);
                }
            }
        });
    });

    /* Run only first saga */
    // const task1 = yield retrySagas[0];
    // yield call(task1);

    yield all(retrySagas);
}

export default rootSaga;
