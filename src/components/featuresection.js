import React from 'react';
import Fade from 'react-reveal/Fade'; // Importing Zoom effect

import { FaArrowsAltH } from "react-icons/fa";
import { IoMdPricetags, IoIosSpeedometer } from "react-icons/io";
import { RiDownloadCloud2Line } from "react-icons/ri";
const Features = () => {
    return (
        <section className="feature-container">

            <div className="container ">

                <h3 className="mb-2 text-center font-weight-bold section-title">The Plug 'n' Play API</h3>
                <div className="mb-5 text-center section-intro">Free, fast, simple and fully managed</div>
                <Fade duration={3000}>
                    <div className="row">

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="content-container">
                                <FaArrowsAltH className="icon-inside-features" />

                                <div className="content-inside">

                                    <h5> Both Past and Future  </h5>
                                    <p> Get access to historical weather data in addition to weather forecasts of locations from all round the globe
                                        In JSON,JSONP amd XML formats.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="content-container">
                                <IoIosSpeedometer className="icon-inside-features" />
                                <div className="content-inside">

                                    <h5>  Fast and the Furious </h5>
                                    <p>
                                        Powered by best-in-class cloud infrastructure, our API delivers data in milliseconds around the clock with an uptime of nearly 100%.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="content-container">
                                <RiDownloadCloud2Line className="icon-inside-features" />
                                <div className="content-inside">

                                    <h5> Real-Time Data  </h5>
                                    <p> Our easy to use API provides live and hour-by-hour , real-time access to weather data from gazillion of locations worldwide.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="content-container">
                                <IoMdPricetags className="icon-inside-features" />
                                <div className="content-inside">
                                    <h5> Start Free, Upgrade later </h5>
                                    <p> Sign up and start using our free API, upgrade later and gain access to more of our features. No card details required.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default Features