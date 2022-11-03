import env from 'config/env';

export default {
  consoleLogger(text, text2 = '', text3 = '', text4 = '') {
    if (env.status === 'development') {
      console.log(text, text2, text3, text4); // eslint-disable-line no-console
    }
  
    return null;
  },
};
