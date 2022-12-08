import * as Yup from 'yup';
import { useState } from 'react';
import { store } from 'config/store';
import { setToast } from 'redux-app/misc/actions';
import { Alert } from 'react-native';
import { logoutFetch } from 'redux-app/auth/actions';
import navigation from './navigation';
import { MiscHelper } from '.';
import screenName from 'config/screenName';
import moment from 'moment';

export const apiRequest = (
  { url, contentType, baseUrl, queryParam },
  method,
  param = null,
  timeout = 3000,
) => {
  MiscHelper.consoleLogger(param);
  let headers = {
    'Content-Type': contentType,
  };

  if (param?.headers != null) {
    headers = Object.keys(param.headers).reduce((obj, item) => {
      obj = {
        ...obj,
        [item]: param.headers[item],
      };
      return obj;
    }, {});
  }

  let body;

  if (contentType === 'multipart/form-data') {
    let formData = new FormData();

    Object.keys(param.data).map((item, index) => {
      formData.append(item, param.data[item]);
    });

    body = formData;
  } else {
    console.log(param, 'test');
    body = param?.data ? JSON.stringify(param?.data) : JSON.stringify(param);
  }

  const token = store.getState()?.auth?.auth?.accessToken;
  console.log(token, 'token');

  if (token) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  if (queryParam !== undefined) {
    let urlQueryParams = Object.keys(queryParam).length > 0 ? '?' : '';
    let i = 0;

    for (let key in queryParam) {
      // Only if the key has a value, otherwise won't be added to the queryParams
      if (queryParam[key] !== null && queryParam[key] !== undefined) {
        urlQueryParams += (i > 0 ? '&' : '') + key + '=' + queryParam[key];
        ++i;
      }
    }

    url += urlQueryParams;
    console.log('urlQueryParams', urlQueryParams);
  }

  MiscHelper.consoleLogger(`======== URL ======== ${url}`);

  let options = {
    method: method,
    headers,
  };

  if (method !== 'get' && method !== 'GET') {
    options = {
      ...options,
      body,
    };
  }

  MiscHelper.consoleLogger(options, 'form');

  return fetch(baseUrl + url, options)
    .then(res => res.json())
    .then(res => {
      MiscHelper.consoleLogger('======== RESPONSE ========');
      MiscHelper.consoleLogger(res);

      // CHECK IF TOKEN EXPIRED
      if (
        res.status === 403 &&
        res.message === 'Forbidden'
      ) {
        store.dispatch(logoutFetch());
        navigation.resetNav(screenName.LOGIN);
        store.dispatch(
          setToast({
            message: 'Silahkan login terlebih dahulu',
          }),
        );
        return;
      }

      if (res.error) {
        throw res;
      } else {
        return res;
      }
    })
    .catch(err => {
      if (err.code === 'ECONNABORTED') {
        // store.dispatch(
        //   setToast({
        //     message: 'Request Timeout, Please try again',
        //   }),
        // );
        Alert.alert(
          'Request Timeout,',
          'Please try again',
          [{ text: 'Ok' }],
          { cancelable: false },
        );
      } else {
        MiscHelper.consoleLogger('======== ERROR ========');
        MiscHelper.consoleLogger(err);
        if (err instanceof TypeError) {
          Alert.alert(
            'Request failed',
            'Maaf, terjadi kesalahan. Silakan muat ulang halaman beberapa saat lagi',
            [{ text: 'Ok' }],
            { cancelable: false },
          );
        }
        throw err;
      }
    });
};


const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

const phonePattern =  Yup.string().min(10, 'Minimal 10 Angka').matches(phoneRegExp, 'No HP tidak valid').required('No HP dibutuhkan');

const namePattern = Yup.string().required('Nama Lengkap dibutuhkan');

const pinPattern = Yup.string().min(5, 'Minimal 6 Angka').max(6, 'Maksimal 6 Angka').required('PIN dibutuhkan');

export function useForm(initialState) {
  const [state, setState] = useState(initialState);
  const setMergedState = newState =>
    setState(prevState => Object.assign({}, prevState, newState));
  return [state, setMergedState];
}

const dateFormat = date => {
  return moment(date).format('YYYY-MM-DD HH:MM:SS');
};

const stringToCurrency = s => {
  s = s.toString().replace(/[^\d]/g, '');
  return s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

const stringToPhoneNumber = s => {
  s = s.toString().replace(/^0/, '+62 ');
  s = s.toString().replace(/^62/, '+62 ');
  return s.toString().replace(/[a-zA-Z]/g, '');
  // return s.replace(/(\d{3})(\d{4})(\d{2,5})/, '$1-$2-$3');
};

const phoneNumberToString = s => {
  return s.toString().replace(/[^\d]/g, '');
};
0;
export default {
  namePattern,
  pinPattern,
  phonePattern,
  dateFormat,
  stringToCurrency,
  stringToPhoneNumber,
  phoneNumberToString,
};
