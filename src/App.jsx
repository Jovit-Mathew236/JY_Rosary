import { useState } from 'react'
import Page1 from './pages/Section1'
import Page2 from './pages/Section2'
import './App.css'


function App() {


  return (
    <>
      <div className="page-container">
        <div className="header">
          <div className="logo">
            <img src="./src/assets/images/pin.svg" alt="logo" />
            <h1>PrayLink</h1>
          </div>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/map">Map</a>
            <a href="/contact">Contact</a>

          </nav>
          <div className="access-code">
            <input placeholder='Type Code' type="text" name='rosary_id' />/
            <button className='btn' >Scan QR</button>
          </div>
        </div>
        {/* add landing page components here */}
        <Page1 /> 
        <Page2 />
      </div >
    </>
  )
}

export default App
