import { Link } from "react-router-dom";
import { useRef, useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Home = () => {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav") //this classname will be add/removed on toggle
    }

    return (
        <>
            <div className="page-container">
                <div className="header">
                    <div className="logo">
                        <img src="/assets/images/marylogo.png" alt="logo" />
                        <h1>PrayLink</h1>
                    </div>

                    <nav ref={navRef}>
                        <Link className='link1' to="/">Home</Link>
                        <Link className='link1' to="/about">About</Link>
                        <a href="#section2">Map</a>
                        <Link className='link1' to="/contact">Contact</Link>
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
    );
}

export default Home;