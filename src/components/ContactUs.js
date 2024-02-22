import React from "react"
import {useNavigate } from 'react-router-dom';
import './ContactUs.css';
function ContactUs(){
    const navigate = useNavigate();
    
  const handleSubmit = (e) => {
  
    navigate('/Logout')
  }
    return(
    <>
        <div class="form-container">
            <h2>Your Ratings/Queries!!!....</h2>
            <form action="#" method="POST">
 
                <label for="name">DishName: </label>
                <input type="text" id="name" name="name"/><br></br>
                <label for="message">Queries: </label>
                <textarea id="message" name="message" rows="4" required></textarea><br></br>
                <label for="message">Positive Commands: </label>
                <textarea id="message" name="message" rows="4" required></textarea><br></br>
                <label for="message">Negative Commands: </label>
                <textarea id="message" name="message" rows="4" required></textarea><br></br>
                <button 
                  style={{
                    color: '#70BA89',
                    fontFamily: 'TimesNewRoman',
                    border: '1px solid #70BA89'
                  }}
                  className="m-3 btn btnhover btn-lg btn-white" onClick={() => handleSubmit()}>SUBMIT</button>
            </form>
        </div>
    </>
    );

}
export default ContactUs;
