// import React, { useEffect, useState } from 'react'
// import './Api.css'

// function Api() {

//     const [temp, settemp] = useState(0);
//     const [humi, sethumi] = useState(0);

//     useEffect(() => {
//         const fetchApi = async () => {
//           const URL = `http://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=da9632b074404234dd33c1ce53888bd8`;
//           const response = await fetch(URL);
//           const resJson = await response.json();
//           settemp(Math.trunc(resJson.main.temp));  //Decimal Removal Fucntion
//           sethumi(resJson.main.humidity)
//         };
//         fetchApi;
//       }, [temp, humi]);
    
//     // const ttemp = temp)
  

//     return (
//         <div className = "API">
//         <h3>T (🌎) {temp } ℃</h3>
//         <h3>H (🌍) {humi} %</h3>
//         </div>
//     )
// }

// export default Api
