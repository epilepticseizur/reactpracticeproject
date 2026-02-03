import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from "./components/footer"
import Header from "./components/header"
import Index1 from './components/index1'
import Index2 from './components/index2'
import Index3 from './components/index3'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <Router>
      <Header />  
      
      <Routes>
        <Route path="/" element={<Index1 />} />
        <Route path="/index2" element={<Index2 />} />
        <Route path="/index3" element={<Index3 />} />
      </Routes>

      <Footer /> 
    </Router>
  )
}

export default App
