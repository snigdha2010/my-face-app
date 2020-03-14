import React from 'react';


const MyList = (props) => {
    const friends = props.myList
    const salary = friends.reduce((salary,myList)=>salary+myList.salary,0);
    return (
        <div >
            <h2>My Friends Collection</h2>
              <p>Current friends:{friends.length}</p>
              <p>Friends total yearly salary:${salary} </p>
        </div>
    );
};

export default MyList;