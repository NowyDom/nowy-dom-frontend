import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import FindApartmentScreen from './FindApartmentScreen';
import AddApartmentScreen from './AddApartmentScreen';
import AccountScreen from './AccountScreen';

const Header = () => {
  return (
    <div className="main-view">
      <Routes>
        <Route path="/find" element={<FindApartmentScreen />} />
        <Route path="/add" element={<AddApartmentScreen />} />
        <Route path="/account" element={<AccountScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  );
};

export default Header;
