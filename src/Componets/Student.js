import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_STUDENT_PROGRESS } from '../redux-saga/Student/Action/action';

const Student = () => {
  const dispatch = useDispatch();

  // Redux store
  const studentData = useSelector(state => state.studentReducer);

  console.log(studentData.Student, "studentdata");

  const student = studentData.student;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch({ type: GET_STUDENT_PROGRESS });
  };

  return (
    <div>
      {/* <button onClick={fetchData}>Fetch Data</button> */}
      <div>
        <h2>Student List</h2>
      </div>
    </div>
  );
};

export default Student;
