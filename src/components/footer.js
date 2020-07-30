import React from 'react';
import { FaFacebook, FaGithub, FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle, AiOutlineCopyright } from "react-icons/ai";

const Footernew = () => (
    <div className="footer" >
        <div classname="container">

            <div className="row mb-3">
                <div className="col-12 align-items-center">
                    <FaFacebook className="facebook" />
                    <FaGithub className="git" />
                    <FaGooglePlus className="google" />
                    <AiFillTwitterCircle className="twitter" />
                </div>
            </div>

            <div className="row">
                <div className="col-12 align-items-center companyfooter">
                    <h6>Pricing</h6>
                    <h6>APIs</h6>
                    <h6>Docs</h6>
                    <h6>About us</h6>

                </div>
            </div>
            <div className="row  mt-4">
                <div className="col-12 align-items-center copyrightrow">
                    <AiOutlineCopyright className="copyright" />
                    <h6>2020  .WeatherAPI</h6>
                </div>
            </div>
        </div>
    </div>
)

export default Footernew