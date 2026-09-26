import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Properties from "./components/Properties"
import About from "./components/About"
import UserDashboard from "./pages/UserDashboard"

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
   
    </div>
  )
}

export default App