/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useRef} from 'react';
import {useContext} from 'react';
import AppContext from '../../AppContext';
import {ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import UIText from './UIText';
import {useApiCall} from '../utils.js/useApiCall';

const FetchData = React.forwardRef(
  (
    {
      url,
      multiple,
      method = 'GET',
      data = null,
      Loader = ActivityIndicator,
      errorMessage = 'Some error occured, click the button below to try again',
      onSuccess = () => {},
      live = false,
      isError = false,
    },
    ref,
  ) => {
    const context = useContext(AppContext);
    const {callApi} = useApiCall();
    let isMounted = useRef(false);
    const [state, setState] = useState({
      refreshing: false,
      loading: true,
      data: null,
      isError: false,
    });

    useEffect(() => {
      isMounted.current = true;
      return () => (isMounted.current = false);
    }, []);

    useEffect(() => {
      if (!live && url && context[url]) {
        isMounted.current && onSuccess(context[url]);
      }
      isMounted.current && fetchData();
    }, [url]);

    const fetchData = (refreshing) => {
      isMounted.current &&
        setState((prevState) => ({
          ...prevState,
          refreshing,
          loading: true,
          isError: false,
          data,
        }));
      if (multiple) {
        Promise.all(
          multiple.map((mult) => callApi(mult.url, mult.data, mult.method)),
        )
          .then((data) => {
            // console.log(data);
            isMounted.current && onSuccess(data);
          })
          .catch((err) => {
            console.log(err);
            isMounted.current &&
              setState((prevState) => ({
                ...prevState,
                loading: false,
                isError: true,
              }));
          });
      } else {
        callApi(url, data, method)
          .then((data) => {
            // console.log(data);
            if (!live) {
              context.dispatch({
                [url]: data,
              });
            }
            isMounted.current &&
              setState((prevState) => ({
                ...prevState,
                refreshing: false,
                loading: false,
                isError: false,
              }));
            isMounted.current && onSuccess(data);
          })
          .catch((err) => {
            console.log(err);
            isMounted.current &&
              setState((prevState) => ({
                ...prevState,
                refreshing: false,
                loading: false,
                isError: true,
              }));
          });
      }
    };

    React.useImperativeHandle(ref, () => ({
      refresh() {
        fetchData();
      },
    }));

    return state.refreshing ||
      (state.loading && ((url && !context[url]) || live)) ? (
      <Loader />
    ) : state.isError || isError ? (
      <TouchableOpacity retryFunction={() => fetchData(true)}>
        <UIText>{errorMessage}</UIText>
      </TouchableOpacity>
    ) : null;
  },
);

export default FetchData;
