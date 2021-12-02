import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';

const Metrics = () => {
    const { pos_tweets, neg_tweets } = useSelector((state) => state.search);
    return (
        <div className='metrics'>
            <Card heading={''} piedata={[neg_tweets.length,pos_tweets.length]} />
            {/* <Card /> */}
        </div>
    );
};

export default Metrics;
