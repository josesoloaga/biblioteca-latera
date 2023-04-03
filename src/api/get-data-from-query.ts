import axios from 'axios';

export const getData = (url: string, callback: Function) => {
  axios
    .get(url)
    .then((response) => {
      callback(response.data);
      console.log('getData response:', response.data);

      /*       console.log("Response.data.value en commonServices",response.data.value); */
    })
    .catch((error) => {
      callback(error);
      console.log(error.message);
    });
};

export const postData = (url: string, data: [string]) => {
  axios
    .post(url)
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
