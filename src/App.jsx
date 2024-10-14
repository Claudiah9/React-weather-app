import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/weather'


function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const API_KEY = '51db448845553a988689075bdcee709a'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
  
  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url)
      .then((response) => {
        setData(response.data)
        console.log(response.data);
      })
      setLocation(""); //clear input after search
    }
 } 

return (
  
      <div className='w-full h-full relative'>
        <div className='text-center p-4'>
          <input type='text' className='py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600
           placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md justify-center align-middle' placeholder='Enter location'
           value={location}
           onChange={(event) => setLocation(event.target.value)}
           onKeyDownCapture={searchLocation}
           />
        </div>
        <Weather weatherData = {data} />
       </div>
  )
}

export default App
