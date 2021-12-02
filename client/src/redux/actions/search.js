import axios from 'axios';
import url from '../../utils/api';
import { SEARCH_ERROR, SET_SEARCH_RESULT } from '../type';

export const getTwitterProfileSentiment = (username) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const body = JSON.stringify({ username: username });
        const res = await axios.post(`${url}/sentiment-v2`, body, config);
        dispatch({
            type: SET_SEARCH_RESULT,
            payload: res.data.data,
        });
    } catch (error) {
        console.log(error.response);
        if (error.response) {
            dispatch({
                type: SEARCH_ERROR,
                payload: error.response.data.message,
            });
        } else {
            dispatch({
                type: SEARCH_ERROR,
                payload: 'Something went wrong',
            });
        }
    }
};
