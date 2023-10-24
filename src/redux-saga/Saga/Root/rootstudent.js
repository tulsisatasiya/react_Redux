import { takeLatest } from "redux-saga/effects";
import { handlegetstudent } from "../ManageStudent/managestudent";
import { GET_STUDENT_PROGRESS } from "../../Student/Action/action";




// GET product data
export function* getstudent() {
    yield takeLatest(GET_STUDENT_PROGRESS,handlegetstudent);
   
  }