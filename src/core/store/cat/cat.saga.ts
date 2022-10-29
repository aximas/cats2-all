import {spawn, call, all} from 'redux-saga/effects';
import {watcherBreedsSaga} from './saga/breed.saga';

function* rootSaga(): Generator {
    const sagas = [watcherBreedsSaga];

   const retrySagas = sagas.map(saga => {
        return spawn(function* () {
            while (true) {
                try {
                    yield call(saga);
                    break;
                }
                catch (e) {
                    console.log(e);
                }
            }
        })
    });

   /* Run only first saga */
   // const task1 = yield retrySagas[0];
   // yield call(task1);

    yield all(retrySagas);

}

export default rootSaga;