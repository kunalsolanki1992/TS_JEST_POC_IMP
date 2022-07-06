import { all, fork } from "redux-saga/effects";

import todoSaga from "./auth";

export function* rootSaga() {
    yield all([fork(todoSaga)])
}