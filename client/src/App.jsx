
import "./App.css";
import { Route , Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import AboutUs from "./Components/AboutUs";
import HomePage from "./Components/HomePage";
import Router from "./React-Router/Router";
function App() {
  return (
    <>
       <Router />
    </>
  );
}

export default App;
