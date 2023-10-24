import { call, put } from "redux-saga/effects";
import { getstudent } from "../../Student/Api/api";
import { GET_STUDENT_ERROR, GET_STUDENT_SUCESS } from "../../Student/Action/action";

// handle the GET_STUDENT_PROGRESS action
export function * handlegetstudent(action){
    try{
        const res = yield call (getstudent,action)
        const status = res.status;
        const data = res.data;
        if (status === 200) {
            yield put({ type: GET_STUDENT_SUCESS, data });
        } else {
             yield put({ type: GET_STUDENT_ERROR,data });
            }
        }
        catch(error){
        yield put({ type: GET_STUDENT_ERROR,error });
    }
    

}

