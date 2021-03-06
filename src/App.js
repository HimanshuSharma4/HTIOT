import React, { useEffect, useState } from 'react';
import './App.css';
import Contact from './Contact';
import Header from './Header';
import loader from './assets/iot.gif';
import react from './assets/react.gif';
import firebase from './assets/firebase.gif';


function App() {
  const [loading, setLoading] =useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)

  }, [])

  return (
    <div className="App">    
    {
      loading ?
        <div className ="loader">
          <img src ={loader} />
          <img src ={firebase} />
          <img src ={react} />
        </div>
      : <div>
          <Header />
          <Contact />
      </div>
    }

   </div>
  )
}

export default App
