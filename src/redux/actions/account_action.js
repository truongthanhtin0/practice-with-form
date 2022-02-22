
import { CREATE_ACCOUNT, GET_LIST_ACCOUNT } from './../constants';

export function createAccount (params) {
    return {
        type: CREATE_ACCOUNT,
        payload: params,
    }
}

export function getListAccount (params) {
    return {
        type: GET_LIST_ACCOUNT,
        payload: params,
    }
}