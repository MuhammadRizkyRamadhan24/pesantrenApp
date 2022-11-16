import { Dispatches } from 'src/consts/index';

const initialState = {
  auth: [],
  messageRegister: '',
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
  case 'LOGOUT': {
    return {
      auth: [],
    };
  }
  default:
    return state;
  }
};

export { authReducer };
