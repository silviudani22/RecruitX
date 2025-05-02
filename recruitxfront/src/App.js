"use client"

import { useState } from "react"
import WelcomePage from "./pages/WelcomePage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import JobsPage from "./pages/JobsPage"
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState("welcome")

  // Simple routing function
  const navigate = (page) => {
    setCurrentPage(page)
  }

  
  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login onBackClick={() => navigate("welcome")} onSignUpClick={() => navigate("signup")} />
      case "signup":
        return <SignUp onBackClick={() => navigate("welcome")} onLoginClick={() => navigate("login")} />
      default:
        return (
          <WelcomePage
            onLoginClick={() => navigate("login")}
            onSignupClick={() => navigate("signup")}
            onGetStartedClick={() => navigate("signup")}
          />
        )
    }
  }

  return <div className="App">{renderPage()}</div>
}

export default App
