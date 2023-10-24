import { GET_STUDENT_ERROR, GET_STUDENT_PROGRESS, GET_STUDENT_SUCESS } from "../Action/action";


const initialstate = {
    Student: [],
    getStudentprogress: false,
    getStudentError: null,
    dataIsLoaded: false
};

const studentReducer = (state = initialstate, action) => {

    switch (action.type) {
        case GET_STUDENT_PROGRESS:
            return {
                ...state,
                getStudentprogress: true,
                getStudentError: null,
                dataIsLoaded: false
            };
        case GET_STUDENT_SUCESS:
            return {
                ...state,
                getStudentprogress: false,
                getStudentError: null,
                Student:action.data,
                dataIsLoaded: true
            };
        case GET_STUDENT_ERROR:
            return {
                ...state,
                getStudentprogress: false,
                getStudentError:action.data,
                dataIsLoaded: false
            }

        

        default:
            return state; 
    }
};

export default  studentReducer;


