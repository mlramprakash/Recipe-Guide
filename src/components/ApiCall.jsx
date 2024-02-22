import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiCall = () => {
    const [responseData, setResponseData] = useState([]);
    useEffect(()=>{
        axios.get('https://serpapi.com/search.json?q=Cheesecake&location=Austin,Texas,United+States&hl=en&gl=us')
            .then(response=>{setResponseData(response.data.results)})
    }, []); 

    return(
        <div>
          <p>Outside Response</p>
          {responseData &&
            responseData.map((responseData, idx) => {
            return (
            <div key={responseData.id}>
              <p>Inside Response</p>
              <p>ID: {responseData.id}</p>
              <img src={responseData.image} alt={responseData.title}/>
              <p>Title: {responseData.title}</p>
            </div>
          )})}
        </div>
    )
}

export default ApiCall