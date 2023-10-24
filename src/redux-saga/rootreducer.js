import { combineReducers } from "redux";
import studentReducer from "./Student/Reducer/reducer";

const rootreducer = combineReducers({
    studentReducer,
});

export default rootreducer;