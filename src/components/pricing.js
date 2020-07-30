import React, { useState, useEffect } from 'react';
import { FiArrowRightCircle } from "react-icons/fi";
import { Button } from 'reactstrap';

import Pulse from 'react-reveal/Pulse';


const Pricing = () => {
    const [scroll, setScroll] = useState(1)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY < 700
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <section className="price-container" id="prices">
            <div className="container ">
                <h3 className="mb-2 text-center font-weight-bold price-section-title">Pick the best plan for you</h3>
                <div className="mb-5 text-center section-intro">Got you covered for all your needs</div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-2 mr-auto plan-container">
                        <div className="Pricing-title">
                            <h4>Free</h4>
                            <p className="plan-price"> 0$ <span>/ month </span> </p>
                            <Button href="#">SIGN UP</Button>
                        </div>
                        <div className="Pricing-content">
                            <ul className="list-unstyled">
                                <li>10,000 calls/month </li>
                                <li>Realtime weather</li>
                                <li>Weather History (Last 7 days only)</li>
                                <li>HTTP included</li>
                                <li>Search API</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2 mr-auto plan-container">
                        <div className="Pricing-title">
                            <h4>Developer</h4>
                            <p className="plan-price">29$ <span>/ month </span> </p>
                            <Button href="#">SIGN UP</Button>

                        </div>
                        <div className="Pricing-content">
                            <ul className="list-unstyled">
                                <li>50,000 calls/month </li>
                                <li>Realtime weather</li>
                                <li>Weather History (Last 10 days only)</li>
                                <li>HTTPS included</li>
                                <li>Search API</li>
                            </ul>

                        </div>
                    </div>
                    <div className={scroll ? "col-12 col-md-6 col-lg-2 mr-auto plan-container" : "col-12 col-md-6 col-lg-2 mr-auto plan-container most-popular"}>
                        <Pulse delay={300}>
                            <div className="Pricing-title">
                                <h4>Professional</h4>
                                <p className="plan-price">69$ <span>/ month </span> </p>
                                <Button href="#">SIGN UP</Button>

                            </div>
                        </Pulse>
                        <div className="Pricing-content">
                            <ul className="list-unstyled">
                                <li>100,000 calls/month </li>
                                <li>Realtime weather</li>
                                <li>Weather History (Last 21 days only)</li>
                                <li>HTTPS included</li>
                                <li>Search API</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2 mr-auto plan-container">
                        <div className="Pricing-title">
                            <h4>Business</h4>
                            <p className="plan-price">99$ <span>/ month </span> </p>
                            <Button href="#">SIGN UP</Button>

                        </div>
                        <div className="Pricing-content">
                            <ul className="list-unstyled">
                                <li>1,000,000 calls/month </li>
                                <li>Realtime weather</li>
                                <li>Weather History (1st Jan, 2015 onwards)</li>
                                <li>HTTPS included</li>
                                <li>Search API</li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2 mr-auto plan-container">
                        <div className="Pricing-title">
                            <h4>Enterprise</h4>
                            <p className="plan-price">  <span> Custom Prices</span> </p>
                            <Button href="#">Contact Us</Button>

                        </div>
                        <div className="Pricing-content">
                            <ul className="list-unstyled">

                                <li>High Volume calls/month </li>
                                <li>Realtime weather</li>
                                <li>Weather History (1st Jan, 2015 onwards)</li>
                                <li>HTTPS included</li>
                                <li>Search API</li>
                                <li>Priority Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="more-features">
                    <h6>View More Details </h6>
                    <FiArrowRightCircle className="more-features-icons" />
                </div>

            </div>
        </section>
    )
}


export default Pricing