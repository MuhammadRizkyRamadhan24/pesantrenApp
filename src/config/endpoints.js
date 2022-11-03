import env from './env';

let baseUrl = env.baseUrl;
const json = 'application/json';
const formData = 'multipart/form-data';

export default {
  login: {
    baseUrl,
    url: '/megahub/login',
    contentType: json,
  },
  getHacbNo: ({ HACB_ORIGIN }) => ({
    baseUrl,
    url: '/megahub/handovergetnohacb',
    contentType: json,
    queryParam: { HACB_ORIGIN },
  }),
  getCnote: ({ CNOTE_NO }) => ({
    baseUrl,
    url: '/megahub/handovergetcnote',
    contentType: json,
    queryParam: { CNOTE_NO },
  }),
};