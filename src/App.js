import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import StartPage from './pages/StartPage/StartPage';
import OwnerPage from './pages/ProfilePages/OwnerPage';

function App() {
  const { role } = useSelector(store => store.basicReducer);
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          {role===1 && <Route path="/users/:address" element={<OwnerPage />} />}
          {/* {role===3 && <Route path="/users/:address" element={<SupplierPage />} />} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
