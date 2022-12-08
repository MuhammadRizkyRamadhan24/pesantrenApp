import env from './env';

let baseUrl = env.baseUrl;
const json = 'application/json';
const formData = 'multipart/form-data';

export default {
  login: {
    baseUrl,
    url: '/login',
    contentType: json,
  },
  register: {
    baseUrl,
    url: '/register',
    contentType: json,
  },
  activateUser: {
    baseUrl,
    url: '/activate',
    contentType: json,
  },
  requestotp: {
    baseUrl,
    url: '/requestotp',
    contentType: json,
  },
  getDetailUser: {
    baseUrl,
    url: '/me',
  },
  // getHacbNo: ({ HACB_ORIGIN }) => ({
  //   baseUrl,
  //   url: '/megahub/handovergetnohacb',
  //   contentType: json,
  //   queryParam: { HACB_ORIGIN },
  // }),
  // getCnote: ({ CNOTE_NO }) => ({
  //   baseUrl,
  //   url: '/megahub/handovergetcnote',
  //   contentType: json,
  //   queryParam: { CNOTE_NO },
  // }),
};
