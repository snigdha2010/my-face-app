import React from 'react';
import'./Header.css';
import logo from '../Images/images.jpeg';

const Header = () => {
    return ( 
            <div>
                <div>
                    <img src={logo} alt=""/>
                </div>
                 

            <div className='header'>
               
                <h1>Welcome to FaceApp</h1>
            </div>
            </div>
           
    );
};

export default Header;