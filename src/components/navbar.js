import React, { useState, useEffect } from 'react';
import { WiDayStormShowers } from "react-icons/wi";
import { Navbar, NavbarToggler, Collapse } from 'reactstrap';

const Navbarnav = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(1)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY < 650
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })


    })
    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return (

        <Navbar className="navbar" expand="lg">
            <div className={scroll ? "container navbarcontainer" : "container-fluid navbarcontainer-sticky"}>

                <a href="#Header" className="Logodisplay">
                    <WiDayStormShowers className="icon" />
                    <div className="Logoname">.WeatherAPI</div>
                </a>
                <NavbarToggler onClick={toggle} className="navbar-dark" />
                <Collapse isOpen={isOpen} navbar id="collapsenavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a className="nav-link" href="#features"><h6>Features</h6></a></li>
                        <li className="nav-item"><a className="nav-link" href="#prices"> <h6>Pricing</h6></a></li>
                        <li className="nav-item"><a className="nav-link" href="#documentation"><h6>Documentation</h6></a></li>
                        <li className="nav-item"><a className="nav-link" href="#prices"> <h6>Sign Up</h6></a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact"> <h6>Contact</h6></a></li>

                    </ul>
                </Collapse>

            </div>

        </Navbar>
    )
}



export default Navbarnav