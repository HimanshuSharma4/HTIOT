import React, {useState , useEffect} from 'react';
import Gauge from 'react-svg-gauge';
import firebase from './firebase'; 
import './Humidity.css'; 
function Humidity() {
    const [Status2, setStatus2] = useState([]);
    useEffect(()=>{
        let isMounted = true;
    const myitems2 = firebase.database().ref('Humidity');
    myitems2.on("value", snapshot => {
      let value = snapshot.val();
      if (isMounted)
      setStatus2(value);
    })
    return () =>{isMounted =false};
    })
    return (
        <div className='humidity'>
            <div className="humidity__gauge">
                <Gauge className="meter__gauge" color='#2e86de'         
                value={Status2} width={220} height={220} label=''/>
            </div>
        </div>
        
    )
}

export default Humidity;