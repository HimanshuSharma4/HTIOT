import React, { useEffect, useState } from 'react';
// import Switch from '@material-ui/core/Switch';
import './Home.css';
import Card from './Card';
import humidity from './assets/humidity.gif';
import day from './assets/Day.gif';
import night from './assets/night.gif';
import Switch from 'react-neumorphic-toggle';
import sunny from './assets/BS.gif';
import cloudy from './assets/cloudsONLY.gif';
import sc from './assets/SwC.gif';

import firebase from './firebase';
import ApiHome from './ApiHome';

function Home() {
    // const theme = {
    //   color: '#55b9f3',
    //   primaryShadowColor: '#489dcf',
    //   secondaryShadowColor: '#62d5ff'
    // };

    const [Connectivity, setConnectivity] = useState(0);

    var d = new Date();
    var n = d.getHours();
  

    const [StatusH, setStatusH] = useState([]);
    const [StatusT, setStatusT] = useState([]);
    const [stateLS0, setStateLS0] = useState(0);
    const [state, setState] = useState(0);

    useEffect(() => {
      const myitemsH = firebase.database().ref("Humidity");
        myitemsH.on("value", (snapshot) => {
        let value = snapshot.val();
        setStatusH(value);
      });



      const LS0 = firebase.database().ref('LED_STATUS0');
        LS0.on("value", snapshot => {
          setStateLS0(snapshot.val());
        })

      const myitemsT = firebase.database().ref("Temperature");
      myitemsT.on("value", (snapshot) => {
        let value = snapshot.val();
        setStatusT(value);
      });

      const conn = firebase.database().ref("Connectivity");
      conn.on("value", (snapshot) => {
        setConnectivity(snapshot.val());
      });


    });

    const plus = () => {
      firebase.database().ref().update({
        LED_STATUS0 : 1
      });
    };
  
    const minus  = () => {
      firebase.database().ref().update({
        LED_STATUS0 : 0



        
      });
    };

    const handleChange = () => {
      setState(state ? 0:1)
      {
      if (state) plus()
      else minus()}
    };



    return (
        
        <div className = 'home'>
            <div className="Data_Overiew">
                <Card Status__Pic={humidity}  Value={StatusH}  Unit = "%" title="Humidity" />
                <div className="Current__Environment">
                    {n>= 6 && n<20 ? <img src={day} alt=""/> : <img src={night} alt=""/> }
                    <h3><ApiHome /></h3>
                    <p style={{color : "#0984e3"}}>New Delhi</p>
                </div>

                <Card Status__Pic={
                    StatusH >=30 && StatusH <=45?
                    cloudy
                    :StatusH >45 && StatusH <= 60?
                    sc
                    :StatusH >60 && StatusH <=100?
                    sunny
                    :false
                  }
                  
                Value={StatusT} 
                Unit = "℃"
                title="Temperature" />

            </div>
            <div className="Home__Status">
                <div className="Top__element">
                    <div className="status__element">
                        <h3> Connectivity :</h3>
                        <div className = {Connectivity ? "Connected" : "Disconnected"}>
                        </div> 
                    </div>

                    <div className="status__element">
                    <h3> Check : {stateLS0}</h3>

                   <Switch
                        onChange={handleChange}
                        // theme = {theme}
                    />  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
