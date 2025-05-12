import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import WelcomePage from "./pages/WelcomePage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import InfoPage from "./pages/InfoPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    
  </React.StrictMode>,
)
