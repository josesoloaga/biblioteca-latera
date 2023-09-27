import axios from 'axios';

export const getData = (url: string, callback: Function) => {
  axios
    .get(url)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      callback(error);
    });
};

export const postData = (url: string, data: [string]) => {
  axios
    .post(url)
    .then((response) => {
    })
    .catch(function (error) {
    });
};
