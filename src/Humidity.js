import React, {useState , useEffect} from 'react';
import Gauge from 'react-svg-gauge';
import firebase from './firebase'; 
import './Humidity.css'; 
function Humidity() {
    const [Status2, setStatus2] = useState([]);
    useEffect(()=>{
    const myitems2 = firebase.database().ref('Humidity');
    myitems2.on("value", snapshot => {
      let value = snapshot.val();
      setStatus2(value);
    })
    })
    return (
        <div className='humidity'>
            <div className="humidity__gauge">
                <Gauge className="meter__gauge" color='blue'         
                value={Status2} width={400} height={320} label=''/>
            </div>
        </div>
        
    )
}

export default Humidity;