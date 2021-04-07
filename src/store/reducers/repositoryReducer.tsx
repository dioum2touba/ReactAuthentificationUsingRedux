import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: null,
    showSuccessModal: false
}

/**
 * 
 * @param state 
 * @param action 
 * @returns 
 */
const executeGetDataSuccess = (state: any, action: any) => {
    return {
        ...state,
        data: action.data
    }
}

/**
 * 
 * @param state 
 * @param action 
 * @returns 
 */
const executePostDataSuccess = (state: any, action: any) => {
    return {
        ...state,
        showSuccessModal: true
    }
}

/**
 * 
 * @param state 
 * @param action 
 * @returns 
 */
const executePutDataSuccess = (state: any, action: any) => {
    return {
        ...state,
        showSuccessModal: true
    }
}

/**
 * 
 * @param state 
 * @param action 
 * @returns 
 */
const executeDeleteDataSuccess = (state: any, action: any) => {
    return {
        ...state,
        showSuccessModal: true
    }
}

/**
 * 
 * @param state 
 * @param action 
 * @returns 
 */
const reducer = (state = initialState, action: any) => {
    switch(action.type) {
        case actionTypes.GET_DATA_SUCESS:
            return executeGetDataSuccess(state, action);
        case actionTypes.POST_DATA_SUCCESS:
            return executePostDataSuccess(state, action);
        case actionTypes.PUT_DATA_SUCESS:
            return executePutDataSuccess(state, action);
        case actionTypes.DELETE_DATA_SUCCESS:
            return executeDeleteDataSuccess(state, action);
        default:
            return state;
    }
}

export default reducer;

