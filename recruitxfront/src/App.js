"use client"

import { useState } from "react"
import WelcomePage from "./pages/WelcomePage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import HomePage from "./pages/HomePage" 
import JobsPage from "./pages/JobsPage" 
import InfoPage from "./pages/InfoPage" 
import AboutUsPage from "./pages/AboutUsPage" 
import MyAccount from "./pages/MyAccount";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome")

    return (
        <Routes>
            <Route path="/login" element={<Login/> }/>
            <Route path="/signup" element={<SignUp/> }/>
            <Route path="/home" element={<HomePage/> }/>
            <Route path="/jobs" element={<JobsPage/> }/>
            <Route path="/info" element={<InfoPage/> }/>
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="*" element={<WelcomePage/> }/>
        </Routes>
        //<JobsPage></JobsPage>
  );
}

export default App
