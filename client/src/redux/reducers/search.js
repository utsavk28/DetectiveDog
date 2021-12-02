import { SET_SEARCH, SET_SEARCH_RESULT, SEARCH_ERROR } from '../type';

const initialState = {
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
        case SET_SEARCH:
            return {
                ...state,
                username: payload,
            };
        case SET_SEARCH_RESULT:
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
