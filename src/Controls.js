import React, { useState,useEffect } from 'react';
import firebase from './firebase';
import './Controls.css';
import Switch from 'react-neumorphic-toggle';
// import Switch from '@material-ui/core/Switch';
function Controls() {

  const theme = {
    color: '#55b9f3',
    primaryShadowColor: '#489dcf',
   secondaryShadowColor: '#62d5ff'
  }

    // const Checked_edit = {
        
    // }

    const [Status, setStatus] = useState([]);
    useEffect(()=>{
        const myitems = firebase.database().ref('LED_STATUS1');
        myitems.on("value", snapshot => {
          setStatus(snapshot.val());
        })
      })
    
    const [state, setState] = useState(0);
    const plus = () => {
        firebase.database().ref().update({
          LED_STATUS1 : 1
        });
      };
    
      const minus  = () => {
        firebase.database().ref().update({
          LED_STATUS1 : 0
        });
      };
    

    // const handleChange = () => {
    //     setState(state ? 0:1);
    //     console.log(state);
    // };
    // if (state) minus()
    //     else plus()


    console.log(Status);
    return (
        <div className="controls">
            {/* <Switch 

                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            /> */}
          <div className="led__left">
            <div className="led">
              <p>Led1 </p>
              <Switch theme={theme}/>
            </div>
            <div className="led"> 
            <p>Led2 </p>
              <Switch />
            </div>
            
            <div className="led"> 
            <p>Led3 </p>
              <Switch />
            </div>
        </div>
        <div className="led__right">
            <div className="led"> 
            <p>Led4 </p>
              
              <Switch />
            </div>
            
            <div className="led"> 
            <p>Led5 </p>
              
              <Switch />
            </div>
            
            <div className="led"> 
            <p>Led6 </p>
              
              <Switch />
            </div>
        </div>

        </div>
    )
}

export default Controls
