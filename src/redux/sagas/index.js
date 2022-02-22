import { fork, all } from "redux-saga/effects";
import accountSaga from "./account_saga";

export default function* mySaga() {
    yield all([
        fork(accountSaga),
    ])
}