import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Pages/Home';
import About from './Pages/About'
import Support from './Pages/Support'
import Platform from './Pages/Platform'
import Pricing from './Pages/Pricing'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Component/Footer'


const App = () => {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/platform' element={<Platform/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/support' element={<Support/>} />
         <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
      </Routes>
       
       <Footer />

    </Router>
      
    
  )
}

export default App
