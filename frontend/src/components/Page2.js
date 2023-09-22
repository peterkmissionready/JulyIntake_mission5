import React, { useEffect, useState } from "react";
// import "../SearchResultsStyle.css";
function Index(props) {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    // console.log(props);
    const apiUrl = `http://localhost:3001/?${props}`;
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        console.log("FETCHING API");
        const jsonData = await response.json();
        console.log("RECEIVED RESPONSE FROM  API");
        console.log(jsonData);


        setMessage(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
 
  },[])
  // console.log("reach here");
  // console.log(message);
  if(message.length===0){
    return <div>Still loading...</div>;
  }
  return <div className="helloDiv"><br/><h2>{message[0].message}</h2></div>;
//Was returning error here. https://stackoverflow.com/questions/63281536/react-hooks-how-to-wait-for-the-data-to-be-fetched-before-rendering helped me to fix this one.

  // return <div><h2>{message[0].message}</h2></div>;
  // return <h2>{message.map(m => (
  //   <div>message: {message.message}</div>
  // ))}</h2>;
}


export default Index;
