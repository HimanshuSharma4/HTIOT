import React from 'react';
import './Extras.css';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import CloudIcon from '@material-ui/icons/Cloud';
function Extras() {
    return (
        <div className="extras">
            <div className="Info__Panal">
                <Brightness7Icon className="Sun__icon"/>
                <h3 className = "Status__report">It's Hot today !</h3>
                <p style={{color:"#5fd1e8"}}className="Suggestions"> Make sure to grab a Bottle of cold water </p>

            </div>
            <div className="location__panal">
                <p style={{color:"#5fd1e8" , fontWeight:'bold'}}>CITY</p>
                <div className="Environment">
                    <div className="environment__status">
                        <CloudIcon/>    
                    </div>
                    <div className="city__details">
                        <p>Paris </p>
                        <p>17 C</p>
                    </div>

                </div>
                <div className="Environment">
                    <div className="environment__status">
                        <CloudIcon/>    
                    </div>
                    <div className="city__details">
                        <p>Paris </p>
                        <p>17 C</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Extras
