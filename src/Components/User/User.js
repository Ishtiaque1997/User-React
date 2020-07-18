import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './User.css';
import fakeData from '../../FakeData/userData'

const User = (props) => {
    //console.log(props);
    const {img,name,email,phone}=props.user;
   
    return (
        <div className="user">
              <div className="image">
                  <img style={{width:200}}src={img} alt=""/>
              </div> 
            <div className="user-details">
                <h3>Name:  {name}</h3>
                <h4>Email: {email}</h4>
                <h3>Phone: {phone}</h3>
                <button className="add-button" onClick={()=>props.handleAddUser(props.user)}> <FontAwesomeIcon icon={faPlus} /> Add to list</button>
            </div>             
        </div>
    );
};

export default User;