import React from 'react';
import './Card.css';
function Card({ Status__Pic , Value, Unit, title}) {
    return (
        <div className='card' style={{background : title ==='Temperature' ? '#3db7c4':'#67f5a4'}}>
            <img src={Status__Pic} alt=""/>
            <h1>{Value} {Unit}</h1>
            <p>{title}</p>
            
        </div>
    )
}

export default Card 
