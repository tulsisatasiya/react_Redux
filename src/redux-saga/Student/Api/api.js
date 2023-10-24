import axios from "axios";
import { BASE_URL, GET_STUDENT_API } from "../../Constant";


export const getstudent = () => {
  return axios.get(BASE_URL + GET_STUDENT_API)
    .then((res) => {
      console.log(res,"std_data");

      const data = res.data;
      const status = res.status;

      return {
        data,
        status
      };
    })
    .catch((error) => {
      console.error(error);
    });
}


