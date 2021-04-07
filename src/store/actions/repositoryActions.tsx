import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';

const getDataSuccess = (data: any) => {
    return {
        type: actionTypes.GET_DATA_SUCESS,
        data: data
    }
}

export const getData = (url: string, props: any) => {
    return (dispatch: any) => {
        axios.get(url)
            .then(response => {
                dispatch(getDataSuccess(response.data));
            })
            .catch(error => {
                // TODO: handle the error when implemented
            })
    }
}

const postDataSuccess = (response: any) => {
    return {
        type: actionTypes.POST_DATA_SUCCESS,
        response: response
    }
}

export const postData = (url: string, obj: any, props: any) => {
    return (dispatch: any) => {
        axios.post(url, obj)
            .then(response => {
                dispatch(postDataSuccess(response));
            })
            .catch(error => {
                // TODO: handle the error when implemented
            })
    }
}

const deleteDataSuccess = (response: any) => {
    return {
        type: actionTypes.DELETE_DATA_SUCCESS,
        response: response
    }
}
export const deleteData = (url: string, props: any) => {
    return (dispatch:any) => {
        axios.delete(url)
        .then(response => {
            dispatch(deleteDataSuccess(response));
        })
        .catch(error => {
            //TODO: handle the error when implemented
        })
    }
}