
import "./App.css";
import { Route , Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import AboutUs from "./Components/AboutUs";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import Router from "./React-Router/Router";
function App() {
  return (
    <>
       <Router />
    </>
  );
}

export default App;
