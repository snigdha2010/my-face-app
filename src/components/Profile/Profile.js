import React, { useState } from 'react';
import './Profile.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'


const Profile = (props) => {
    const { name, img, email, phone, salary } = props.profile
    return (
        <div className='a'>
            
            <div className='user-profile'>
                <div>

                    <img src={img} alt="" />
                </div>

                <div>
                    <h2>{name} </h2>
                    <p><small>{email}</small></p>
                    <p><bold>Phone#{phone}</bold></p>
                    <p>Salary:${salary}</p>
                    <button onClick={()=>props.handlePayBtn(props.profile)}> <FontAwesomeIcon icon={faPlus} />Add Friend</button>


                </div>



            </div>



        </div>
    );
};

export default Profile;