import {
  Dispatches,
} from 'src/consts/index';

const initialState = {
  loading: {},
};

const miscReducer = (state = initialState, action) => {
  switch (action.type) {
  case Dispatches.LOADING: {
    return {
      ...state,
      loading: {
        ...state.loading,
        [action.payload.fieldName]: action.payload.status,
      },
    };
  }
  default:
    return state;
  }
};

export { miscReducer };

// action.payload { fieldName = loginFetch, status: false}
// [action.payload.fieldName] => loginFetch
