import { useState } from 'react';
import Section1 from './pages/Section1';
import Section2 from './pages/Section2';
import './App.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react';

function App() {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav") //this classname will be add/removed on toggle
  }

  return (
    <>
      <div className="page-container">
        
        <div className="header">

          <div className="logo">
            <img src="./src/assets/images/pin.svg" alt="logo" />
            <h1>PrayLink</h1>
          </div>

          <nav ref={navRef}>
              <a className='link1' href="/">Home</a>
              <a className='link1' href="/about">About</a>
              <a className='link1' href="/map">Map</a>
              <a className='link1' href="/contact">Contact</a>
              <button className="nav-btn nav-close-btn" onClick={showNavBar}><FaTimes /></button>
          </nav>
          <button className="nav-btn" onClick={showNavBar}><FaBars /></button>
          <div className="access-code">
            <input placeholder='Type Code' type="text" name='rosary_id' /><h3>/</h3>
            <button className='btn' >Scan QR</button>
          </div>
        </div>
        {/* add landing page components here */}
        <Section1 />
        <Section2 />
      
      </div >
    </>
  )
}

export default App
