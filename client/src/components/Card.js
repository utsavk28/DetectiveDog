import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import Tweet from './Tweet.js';
import ColoredScrollbar from './ColoredScrollbar';

const Card = ({ heading, piedata }) => {
    const [posActive, setPosActive] = useState(true);
    const { pos_tweets, neg_tweets } = useSelector((state) => state.search);
    const data = {
        labels: ['Negative', 'Postitve'],
        datasets: [
            {
                data: piedata,
                backgroundColor: ['rgb(255, 51, 51)', 'rgb(51, 255, 51)'],
                hoverOffset: 4,
            },
        ],
    };

    return (
        <div className='metrics-card-cover'>
            <h3 className='header'>{heading}</h3>
            <div className='metric-card-div'>
                <div className='metric-card metric-graph'>
                    <Doughnut data={data} />
                </div>
                <div className='metric-card metric-tweets'>
                    <ul class='nav nav-pills'>
                        <li class='nav-item'>
                            <button
                                class={`nav-link ${
                                    posActive
                                        ? 'active text-dark bg-light'
                                        : 'text-light'
                                } `}
                                onClick={() => setPosActive(true)}
                            >
                                Positive Tweet's
                            </button>
                        </li>
                        <li class='nav-item'>
                            <button
                                class={`nav-link ${
                                    !posActive
                                        ? 'active text-dark bg-light'
                                        : 'text-light'
                                } `}
                                onClick={() => setPosActive(false)}
                            >
                                Negative Tweet's
                            </button>
                        </li>
                    </ul>
                    <div className='tweets-panel'>
                        <ColoredScrollbar
                        // style={{ color: 'red' }}
                        >
                            {posActive
                                ? pos_tweets.map((tweet) => {
                                      return (
                                          <Tweet
                                              text={tweet[0]}
                                              link={tweet[2]}
                                          />
                                      );
                                  })
                                : neg_tweets.map((tweet) => {
                                      return (
                                          <Tweet
                                              text={tweet[0]}
                                              link={tweet[2]}
                                          />
                                      );
                                  })}
                        </ColoredScrollbar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
