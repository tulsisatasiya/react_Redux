import { all } from "redux-saga/effects";
import { getstudent } from "./Root/rootstudent";

export function* rootSaga() {
    yield all([getstudent()]);
}
