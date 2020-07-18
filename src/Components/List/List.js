import React, { useState, useEffect } from 'react';
import css from'./List.css';
import User from '../User/User';
import fakeData from '../../FakeData/userData'
import Count from '../Count/Count';


const List = () => {
  const first10=fakeData.slice(0,10);
    const [users,setUsers]=useState(first10)

     
    //  const[count,setCount]=useState([]);
    // const handleAddUser=(user)=>{
    //     console.log('user added',user);
    //     const newCount=[...count,user];
    //     setCount(newCount);
    // } 
    const [count,setCount] = useState([]);

    const handleAddUser = (user)=>{
        let existingUser = count.find( users => users.id ===user.id)
        if(!existingUser)
        {
            const newCount = [...count,user];
            setCount(newCount);
        }
        else
        {
            alert('Users Already Added');
        }

    }

    return (
        <div className="List-container">
            <div className="user-container">
           
              {
                users.map(user=><User handleAddUser={handleAddUser} user={user}></User>) 
              }
            </div>
        
           <div className="count-container">
             <Count count={count}></Count>
               
           </div>
              
        </div>
    );
            }


export default List;
