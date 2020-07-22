import React from 'react';
import AppContext from '../../AppContext';
import axios from 'axios';

export const SERVER_DOMAIN = 'https://questions.aloc.ng/api/m?';

export const useApiCall = () => {
  const {token, dispatch} = React.useContext(AppContext);
  const callApi = (url, data, method, externalResource, passedToken) => {
    if (!token && !passedToken) {
      console.log(`Calling Api ${url}`);
    }
    var axiosOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      url: externalResource ? url : `${SERVER_DOMAIN}${url}`,
      method: method || 'get',
    };
    if (token || passedToken) {
      axiosOptions.headers['x-auth-token'] = `${
        passedToken ? passedToken : token
      }`;
      console.log(`Calling Secured Api ${url}`);
    }
    if (data) {
      axiosOptions.data = data;
    }
    return new Promise(function (resolve, reject) {
      axios(axiosOptions)
        .then(({data}) => {
          console.log(url, 'success');
          resolve(data);
        })
        .catch((error) => {
          console.log(url, 'error');
          if (error && error.response && error.response.status === 401) {
            dispatch({
              isLoggedIn: false,
            });
          }
          reject(error);
        });
    });
  };

  return {
    callApi,
  };
};
