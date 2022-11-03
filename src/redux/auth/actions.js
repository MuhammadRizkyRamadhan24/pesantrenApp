import { Dispatches } from 'consts/index';

export const loginFetch = v => ({ type: Dispatches.LOGIN_FETCH, param: v });
export const loginResp = v => ({ type: Dispatches.LOGIN_RESPONSE, response: v });
