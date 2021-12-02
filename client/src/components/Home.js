import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Profile from './Profile';
import Metrics from './Metrics';
import { useSelector } from 'react-redux';

const Home = () => {
    const { username: username2, profile } = useSelector((state) => state.search);
    const [username, setUsername] = useState('');

    useEffect(() => {
        setUsername(username2);
    }, []);

    return (
        <div className='home'>
            <div className='content'>
                <Navbar />
                <Search username={username} setUsername={setUsername} />
                {profile && (
                    <>
                        <Profile />
                        <Metrics />
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
