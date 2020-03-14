import React, { useState } from 'react';
import data from '../../sampleData';
import Profile from '../Profile/Profile';
import './Body.css';
import MyList from '../MyList/MyList';

const Body = () => {
   const userData = data;
   const [users] = useState(userData);
   const [friends,setFriends] = useState([]);

   const handlePayBtn = (userInfo)=>{
       console.log("Paid",userInfo);
       const newFriend = [...friends,userInfo];
       setFriends(newFriend);
   }
    return (
        <div className = 'profile'>
            <div>
                 <div className ='user-detail'>
                     <MyList myList={friends}></MyList>
                    
            </div>
            </div>
           
            <div className='individual-details'>
            {
                 users.map(user=> 
                 <Profile profile = {user}
                 handlePayBtn = {handlePayBtn}>
                 </Profile>)
                                }
            </div>        
            
        </div>
    );
};

export default Body;