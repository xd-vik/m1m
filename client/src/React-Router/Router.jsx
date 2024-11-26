import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Components/HomePage';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import AboutUs from '../Components/AboutUs';
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default Router