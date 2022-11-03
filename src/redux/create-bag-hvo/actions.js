import { Dispatches } from 'consts/index';

export const getHacbNoFetch = v => ({ type: Dispatches.GET_HACB_NO_FETCH, param: v });
export const getHacbNoResp = v => ({ type: Dispatches.GET_HACB_NO_RESPONSE, response: v });

export const getDetailCnoteFetch = v => ({ type: Dispatches.GET_DETAIL_CNOTE_FETCH, param: v });
export const getDetailCnoteResp = v => ({ type: Dispatches.GET_DETAIL_CNOTE_RESPONSE, response: v });
