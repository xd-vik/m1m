import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import AboutUs from '../Components/AboutUs';
import ContactUs from '../Components/ContactUs';
import RefreshHandler from '../features/toast/handler/RefreshHandler';
const Router = () => {
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const PrivateRoute = ({element}) =>{
    return isAuthenticated ? element : <Navigate to='/login' />
  }
  return (
    <div>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<PrivateRoute element={<HomePage />}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      
    </div>
  );
} 

export default Router