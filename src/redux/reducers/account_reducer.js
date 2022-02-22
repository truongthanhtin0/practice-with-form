import {
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAIL,
  GET_LIST_ACCOUNT_SUCCESS,
  GET_LIST_ACCOUNT_FAIL,
} from "./../constants";

const initialState = {
  dataCreate: {},
  listAccount: [],
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        dataCreate: { ...action.payload },
      };
    }
    case CREATE_ACCOUNT_FAIL: {
      return state;
    }
    case GET_LIST_ACCOUNT_SUCCESS: {
      return {
        ...state,
        listAccount: [...action.payload],
      };
    }
    case GET_LIST_ACCOUNT_FAIL: {
      return state;
    }
    default:
      return state;
  }
}
