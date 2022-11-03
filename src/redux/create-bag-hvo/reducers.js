import { Dispatches } from 'src/consts/index';

const initialState = {
  getHacbNo: {},
  detailCnote: [],
};

const createBagHVOReducer = (state = initialState, action) => {
  switch (action.type) {
  case Dispatches.GET_HACB_NO_RESPONSE: {
    return {
      ...state,
      getHacbNo: action.response,
    };
  }
  case Dispatches.GET_DETAIL_CNOTE_RESPONSE: {
    return {
      ...state,
      detailCnote: action.response,
    };
  }
  default:
    return state;
  }
};

export { createBagHVOReducer };
