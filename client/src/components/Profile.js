import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const { profile, pos_score } = useSelector((state) => state.search);
    const [color, setColor] = useState({
        r: 255,
        g: 0,
        b: 0,
    });
    const [width, setWidth] = useState(22.55);

    useEffect(() => {
        const width2 = Math.round(pos_score*10000)/100
        setWidth(width2)
        setColor({
            r: Math.floor(255 - (width2 * 255) / 100),
            g: Math.floor((width2 * 255) / 100),
            b: 0,
        });
    }, [pos_score]);


    return (
        <div className='profile'>
            <div className='profile-header'>
                <div className='profile-img'>
                    <img src={profile.profile_image_url} alt='' />
                </div>
                <div className='profile-data'>
                    <h5>{profile.name}</h5>
                    <h6>@{profile.username}</h6>
                    <p>{profile.bio}</p>

                    <ul>
                        <li>
                            {profile.public_metrics.followers_count} Followers
                        </li>
                        <li>
                            {profile.public_metrics.following_count} Following
                        </li>
                    </ul>
                    <ul>
                        <li>
                            {profile.public_metrics.tweet_count} Tweets,
                            Retweets & Replies
                        </li>
                    </ul>
                </div>
            </div>
            <div className='sentiment-div'>
                <h4>Overall Profile Sentiment</h4>
                <div className='sentiment-bar'>
                    <span> {width}% Positive</span>

                    <div
                        className='sentiment-bar-inner'
                        style={{
                            width: `${width}%`,
                            backgroundColor: `rgba(${color.r},${color.g},${color.b},1)`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
