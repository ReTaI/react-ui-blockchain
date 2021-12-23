import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Authorization from './pages/StartPage/Authorization';
import Registration from './pages/StartPage/Registration';
import StartPage from './pages/StartPage/StartPage';
import Admin from './pages/Admin';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/signin" element={<Authorization />} />
                    <Route path="/signup" element={<Registration />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;