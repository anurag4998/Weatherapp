import React from 'react';

import Navbarnav from './navbar';

const Header = () => {


    return (
        <div className='Header' id='Header'>
            <Navbarnav />
            <div className="container Hero">
                <h1>A one place stop for all your <br></br>weather API searches</h1>
                <h4>Retrieve accurate information from anywhere in the world, In your favoured<br></br> lightweight data format, trusted by over 80000+ people worldwide.</h4>
                <div className="Hero-button">
                    <a href="#prices" className="button">
                        Get Started Free</a>
                </div>
            </div>

        </div>
    )

}
export default Header


