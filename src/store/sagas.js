import { all } from "redux-saga/effects";
import NewsSagas from "./sagas/newsSagas";


export default function* rootSaga() {
  yield all([
    NewsSagas(),
  ]);
}
