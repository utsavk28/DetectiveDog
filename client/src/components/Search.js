import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import search from '../assets/search.png';
import {
    getTwitterProfileSentiment,
    startSearch,
} from '../redux/actions/search';

const Search = ({ username, setUsername }) => {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        dispatch(startSearch());
        e.preventDefault();
        dispatch(getTwitterProfileSentiment(username));
    };

    return (
        <div className='search-div'>
            <form className='search-bar'>
                <input
                    className='search'
                    type='text'
                    value={username}
                    onChange={handleChange}
                    placeholder='Enter Twitter Username '
                />
                <button
                    className='btn '
                    id='btn-search'
                    onClick={handleSubmit}
                    disabled={username === ''}
                    type='submit'
                >
                    <img className='search-icon' src={search} alt='' />
                </button>
            </form>
        </div>
    );
};

export default Search;
