import React, { useEffect, useState } from 'react'

function Api() {

    const [temp, settemp] = useState(null);
    const [humi, sethumi] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
          const URL = `http://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=fb8e5ee2890a528490eab4c3ef5c2179`;
          const response = await fetch(URL);
          const resJson = await response.json();
          settemp(resJson.main.temp);
          sethumi(resJson.main.humidity)
        };
        fetchApi();
      }, []);

    
    //   setInterval(() => {
    //       fetchApi();
          
    //   }, 100000);

    return (
        <div className = "API">
        <h3>{temp} ℃</h3>
        <h3>{humi} %</h3>
        </div>
    )
}

export default Api
