import React, { useEffect, useState } from 'react'
import './App.css'
import axios from './axios'
import Weather from './components/Weather';
import {API_KEY,API_URL} from './constant'
import {Loader,Dimmer} from 'semantic-ui-react'

function App() {
  const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);
const [data,setData] = useState([])

useEffect(() => {
  const fetchData = async ()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    axios.get(`/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`).then((response)=>{
      setData(response.data)
    })
  }
 fetchData();
}, [lat, long]);

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (<Weather weatherData={data}/>) : 
      (<div> <Dimmer active>
              <Loader>Loading..</Loader>
            </Dimmer>
        </div>)}
     
    </div>
  )
}

export default App
