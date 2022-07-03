import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import MounthStatistics from './pages/MonthStatistics/MounthStatistics';
import Header from './shared/Header/Header';
import Popup from './shared/Popup/Popup';

const App = () => {
    return (
        <div className="global-container">
            {/* <Popup /> */}
            <div className="container">
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/month-statistics' element={<MounthStatistics />} />
                </Routes>
            </div>
        </div>
    )
}


export default App;
