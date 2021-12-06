import React from 'react';

const InfoPage = () => {
    return (
        <div className='info-page'>
            <h1>Detective Dog</h1>
            <div>
                <h2>About Project</h2>
                <p>
                    This Good Boy sniffs out the sentiment from twitter profile
                    and presents in the elegant way. Or you could also say it as
                    Applying Sentiment Analysis on Twitter Profile and the using
                    ChartJs to visualize the result.
                </p>
            </div>
            <div>
                <h2>Models</h2>
                <div className='model-table-div'>
                    <table
                        id='model-table'
                        className='table table-dark table-hover table-bordered align-middle'
                    >
                        <tr>
                            <th colSpan='2'>Model</th>
                            <th colSpan='2'>Training</th>
                            <th colSpan='2'>Testing</th>
                            <th>API</th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>Settings</th>
                            <th>Accuracy </th>
                            <th>F1 Score</th>
                            <th>Accuracy</th>
                            <th>F1 Score</th>
                            <th>Version</th>
                        </tr>
                        <tr>
                            <td>Textblob</td>
                            <td>Default</td>
                            <td>-</td>
                            <td>-</td>
                            <td>62.24%</td>
                            <td>0.5994</td>
                            <td>v1</td>
                        </tr>
                        <tr>
                            <td>VaderSentiment</td>
                            <td>Default</td>
                            <td>-</td>
                            <td>-</td>
                            <td>65.19%</td>
                            <td>0.6453</td>
                            <td>v2</td>
                        </tr>
                        <tr>
                            <td rowSpan='2'>Logistic Regression </td>
                            <td>Bag of words & Lemmatization Used</td>
                            <td>79.58%</td>
                            <td>0.8008</td>
                            <td>77.92%</td>
                            <td>0.7859</td>
                            <td>v3-1</td>
                        </tr>
                        <tr>
                            <td>TF-IDF & Lemmatization Used</td>
                            <td>79.80%</td>
                            <td>0.8015</td>
                            <td>78.11%</td>
                            <td>0.7856</td>
                            <td>v3-2</td>
                        </tr>
                        <tr>
                            <td rowSpan='2'>Bernoulli Naive Bayes </td>
                            <td>Bag of words & Lemmatization Used</td>
                            <td>80.36%</td>
                            <td>0.8051</td>
                            <td>76.98%</td>
                            <td>0.7733</td>
                            <td>v4-1</td>
                        </tr>
                        <tr>
                            <td>TF-IDF & Lemmatization Used</td>
                            <td>80.36%</td>
                            <td>0.8052</td>
                            <td>76.98%</td>
                            <td>0.7733</td>
                            <td>v4-2</td>
                        </tr>
                        <tr>
                            <td rowSpan='2'>Multinomial Naive Bayes </td>
                            <td>Bag of words & Lemmatization Used</td>
                            <td>80.37%</td>
                            <td>0.8020</td>
                            <td>76.91%</td>
                            <td>0.7680</td>
                            <td>v4-3</td>
                        </tr>
                        <tr>
                            <td>TF-IDF & Lemmatization Used</td>
                            <td>80.36%</td>
                            <td>0.8051</td>
                            <td>76.98%</td>
                            <td>0.7733</td>
                            <td>v4-4</td>
                        </tr>
                        <tr>
                            <td rowSpan='2'>Gradient Boosting Classifier </td>
                            <td>
                                TF-IDF (min_df = 5) & Lemmatization Used .
                                <br />
                                Gradient Boosting Parameters : (lr = 1.5, n =
                                150, depth = 10)
                            </td>
                            <td>80.03%</td>
                            <td>0.8065</td>
                            <td>77.00%</td>
                            <td>0.7780</td>
                            <td>v5-1</td>
                        </tr>
                        <tr>
                            <td>
                                {/* TF-IDF {(min_df = 5)} & Lemmatization Used .
                                Gradient Boosting Parameters :{' '}
                                {((lr = 1.25), (n = 300), (depth = 15))} */}
                            </td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='my-2'>
                <p>
                    Check out the{' '}
                    <a
                        href='https://github.com/utsavk28/DetectiveDog'
                        target='_blank'
                        rel='noreferrer'
                        style={{ textDecoration: 'none' }}
                    >
                        repo
                    </a>{' '}
                    for more details
                </p>
            </div>
        </div>
    );
};

export default InfoPage;
