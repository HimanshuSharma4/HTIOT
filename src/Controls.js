import React, { useEffect, useState } from 'react';
import Switch from '@material-ui/core/Switch';
import firebase from './firebase';
function Controls() {
    // const [Status, setStatus] = useState([]);
    // useEffect(()=>{
    //     const myitems = firebase.database().ref('LED_STATUS0');
    //     myitems.on("value", snapshot => {
    //       setStatus(snapshot.val());
    //     })
    //   })
    

    // const [state, setState] = useState(0);

    // const plus = () => {
    //     firebase.database().ref().update({
    //       LED_STATUS0 : 1
    //     });
    //   };
    
    //   const minus  = () => {
    //     firebase.database().ref().update({
    //       LED_STATUS0 : 0
    //     });
    //   };
    

    // const handleChange = (event, val) => {
    //     setState(val ? 0:1);
    //     console.log(state);  

    // };
    // if (state) minus()
    // else plus()

    // console.log(Status);
    


    return (
        <div className="control">
            {/* <Switch 

            //     checked={state.checkedA}
            //     onChange={handleChange}
            //     name="checkedA"
            //     inputProps={{ 'aria-label': 'secondary checkbox' }}
            // />*/}
        </div>
    )
}

export default Controls
