import axios from "axios";

export const getData = (url: string, callback: Function) => {
  axios
    .get(url)
    .then((response) => {
      callback(response.data);
      console.log("getData response:", response.data.results);

      /*       console.log("Response.data.value en commonServices",response.data.value); */
    })
    .catch((error) => {
      callback(error);
      console.log(error.message);
    });
};
