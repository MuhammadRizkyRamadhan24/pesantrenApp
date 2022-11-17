import { Dispatches } from 'src/consts/index';

const initialState = {
  auth: [],
  messageRegister: '',
  messageActivateUser: '',
  messageReqOtp: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case Dispatches.LOGIN_RESPONSE: {
    return {
      ...state,
      auth: action.response,
    };
  }
  case Dispatches.REGISTER_RESPONSE: {
    return {
      ...state,
      messageRegister: action.response,
    };
  }
  case Dispatches.ACTIVATE_USER_RESPONSE: {
    return {
      ...state,
      messageActivateUser: action.response,
    };
  }
  case Dispatches.REQ_OTP_RESPONSE: {
    return {
      ...state,
      messageReqOtp: action.response,
    };
  }
  case 'LOGOUT': {
    return {
      auth: [],
      messageRegister: '',
      messageActivateUser: '',
      messageReqOtp: '',
    };
  }
  default:
    return state;
  }
};

export { authReducer };
