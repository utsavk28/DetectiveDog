import axios from 'axios';
import url from '../../utils/api';
import { SEARCH_ERROR, SET_SEARCH_RESULT, START_SEARCH } from '../type';

export const startSearch = () => async (dispatch) => {
    dispatch({
        type: START_SEARCH,
    });
};

export const getTwitterProfileSentiment = (username) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const res = await axios.get(`${url}/sentiment-v2/${username}`, config);
        dispatch({
            type: SET_SEARCH_RESULT,
            payload: res.data.data,
        });
    } catch (error) {
        if (error.response) {
            dispatch({
                type: SEARCH_ERROR,
                payload: 'Please Check whether the username is correct or not',
            });
        } else {
            dispatch({
                type: SEARCH_ERROR,
                payload: 'Something went wrong, Please Try Again Later',
            });
        }
    }
};
