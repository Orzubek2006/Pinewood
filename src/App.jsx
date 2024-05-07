import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Clear from './Components/Loyuts/Clear'
import Kontakt from './Components/Loyuts/Kontakt'
import Sena from './Components/Loyuts/Sena'
import Nas from './Components/Loyuts/Nas'
import Projekts from './Components/Loyuts/Projekts'
import Footer from './Components/Footer'

import Shop from './Components/Shop'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Projekts' element={<Projekts />} />  
          <Route path="/Clear" element={<Clear />} />
          <Route path="/Sena" element={<Sena />} />
          <Route path="/Nas" element={<Nas />} />
          <Route path="/Kontakt" element={<Kontakt />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App