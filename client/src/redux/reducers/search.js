import { START_SEARCH, SET_SEARCH_RESULT, SEARCH_ERROR } from '../type';
import notyf from '../../notification';
const initialState = {
    loading: false,
    profile: null,
    pos_score: null,
    neg_score: null,
    pos_tweets: null,
    neg_tweets: null,
    error: null,
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case START_SEARCH:
            notyf.open({
                type: 'info',
                message: 'Fetching data...',
            });
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SET_SEARCH_RESULT:
            notyf.success('Found!!!');
            return {
                ...state,
                profile: payload.profile,
                pos_score: payload.pos_score,
                neg_score: payload.neg_score,
                pos_tweets: payload.pos_tweets,
                neg_tweets: payload.neg_tweets,
                error: null,
            };
        case SEARCH_ERROR:
            notyf.error(payload);
            return {
                ...state,
                profile: null,
                pos_score: null,
                neg_score: null,
                pos_tweets: null,
                neg_tweets: null,
                error: null,
            };
        default:
            return state;
    }
};

export default reducer;
