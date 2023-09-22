import React, { useEffect, useState } from 'react';
import "../SearchResultsStyle.css";
import "../ResultsLayoutStyle.css";
import HouseCard from "../HouseCard";

// export default Index;
let ascBy=null;
let descBy=null;
function Page1(props) {
  const [houses, setMessage] = useState([]);
  useEffect(() => {
    // console.log(props);
    const params = new URLSearchParams(window.location.search);//this url helped me https://saturncloud.io/blog/how-to-get-query-string-values-in-javascript/#:~:text=Using%20the%20URLSearchParams%20API,a%20parameter%20to%20its%20constructor.
    ascBy=params.get("asc");
    descBy=params.get("desc");

    let apiUrl = `http://localhost:8000/houses?${props}`;
    if(ascBy){
      apiUrl+="&asc="+ascBy;
    }else if(descBy){
      apiUrl+="&desc="+descBy;
    }
    // const apiUrl = `http://localhost:8000/houses`;
    console.log(apiUrl);

    // if(ascBy==="pricePerWeek"){

      // document.querySelector('#sortOptions').querySelector('option')[3].selected = 'selected';
    // }


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
  if(houses.length===0){
    return <div>Still loading...</div>;
  }
  // houses.splice(4);
  var rascBy= {

  };
  // var rdescBy= {

  // };
  if(ascBy==="pricePerWeek"){
    rascBy.defaultValue="lowestPrice";
  }else if(descBy=="pricePerWeek"){
    rascBy.defaultValue="highestPrice";
  }
  const handleChange = event => {
    console.log(event.target.value);
    if(event.target.value==="lowestPrice"){
      window.location.href="http://localhost:3000/page1?asc=pricePerWeek";
    } else if(event.target.value==="highestPrice"){
      window.location.href="http://localhost:3000/page1?desc=pricePerWeek";
    }
    // setSelected(event.target.value);
  };
  return <div>
    <div className="searchFilterPane">
      <table>
        <tbody>
      <tr>
      <td>

      <input type="text" placeholder='Search area here'></input>
      &thinsp;
      &thinsp;
      &thinsp;
      </td>
      <td>
        
        <div>
          33 Results
          </div>
        </td>
      
      <td> 
        <select id="sortOptions" {...rascBy} onChange={handleChange}>
          <option value="featuredFirst">Sort: Featured first</option>
          <option value="featuredLast">Sort: Featured last</option>
          <option value="highestPrice">Sort: Highest Price</option>
          <option value="lowestPrice">Sort: Lowest Price</option>
        </select>

      </td>
      <td>
        <div id="mapButton">Map</div>
      </td>
      <td>
        <div id="filtersButton">Filters</div>
      </td>
      <td>
        <div id="resetButton">Reset</div>
      </td>
      </tr>
      </tbody>
      </table>
    </div>
    <div id="listOfHouses">
    {houses.map((house, index)=> {
      return <HouseCard house={house} key={index}/>
    })}
{/*       <div class="houseItem"></div>
      <div class="houseItem"></div> */}
      {/* <div class="houseItem"></div> */}

    </div>
  
  </div>;
}

// function changeSortMethod(){
//   console.log("reached here2");
// }
export default Page1;