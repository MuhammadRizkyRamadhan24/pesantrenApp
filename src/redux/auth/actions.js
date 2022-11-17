import { Dispatches } from 'consts/index';

export const loginFetch = v => ({ type: Dispatches.LOGIN_FETCH, param: v });
export const loginResp = v => ({ type: Dispatches.LOGIN_RESPONSE, response: v });

export const registerFetch = v => ({ type: Dispatches.REGISTER_FETCH, param: v });
export const registerResp = v => ({ type: Dispatches.REGISTER_RESPONSE, response: v });

export const activateUserFetch = v => ({ type: Dispatches.ACTIVATE_USER_FETCH, param: v });
export const activateUserResp = v => ({ type: Dispatches.ACTIVATE_USER_RESPONSE, response: v });

export const reqOtpFetch = v => ({ type: Dispatches.REQ_OTP_FETCH, param: v });
export const reqOtpResp = v => ({ type: Dispatches.REQ_OTP_RESPONSE, response: v });
