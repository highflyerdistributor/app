import React from 'react';
import {Link} from "react-router-dom";
import HFLogo from './assets/img/high_flyer_logo.png';

class Navbar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='navbar'>
                <div className='logo-container'>
                    <img src={HFLogo} className='logo-img'/>
                </div>
                <h3 className="brand-name">High Flyer</h3>
                <p className="brand-slogan">fly higher towards your goal today</p>
                <div className='navbar-menu'>
                    <div className='navbar-texts display-flex'>
                        <Link to="/" className='nav-link'>
                            <span class='vertical-center'>Home</span>
                        </Link>
                        <Link to="/bookings" className='nav-link'>
                            <span class='vertical-center'>Services</span>
                        </Link>

                    </div>
                </div>

                            
            </div> 

        )
    }
}

export default Navbar;


