import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import InfoPage from './components/InfoPage';
import Info from './components/Info';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Back from './components/Back';

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <Info />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path='/info'
                        element={
                            <>
                                <Back />
                                <InfoPage />
                            </>
                        }
                    />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
};

export default App;
