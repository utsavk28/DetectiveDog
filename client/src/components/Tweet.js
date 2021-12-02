import React from 'react';

const Tweet = ({ text, link }) => {
    return (
        <div className='tweet m-1 p-2'>
            <a href={link} target='_blank' rel='noreferrer'>
                <p>
                    {'>'} {text}
                </p>
            </a>
        </div>
    );
};

export default Tweet;
