import React, {useState , useEffect} from 'react';
import Gauge from 'react-svg-gauge';
import firebase from './firebase'; 
import './Temperature.css';

function Temperature() {
    const [Status1, setStatus1] = useState([]);
    useEffect(()=>{
    const myitems2 = firebase.database().ref('Temperature');
        myitems2.on("value", snapshot => {
        let value = snapshot.val();
        setStatus1(value);
    });
    });
    return (
        <div className='temperature'>
            <div className="temperature__gauge">
                <Gauge className="meter__gauge" color='Cyan' value={Status1} width={220} height={200} label=''/>
            </div>
            
            <div className="temperature__data">

            </div>
        </div>
        
    )
}

export default Temperature;