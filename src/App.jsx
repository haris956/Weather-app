import { useState } from 'react'
import './App.css'

function App() {
  const[ city, setCity] = useState('')
  const[ weather,setweather ] = useState(null)

  const citychanged = (e) => {
    setCity (e.target.value)
  }

  const handleSearch = () => {
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=940ffef73cf89ff3799c42c8b1e8233a&units=metric`)
      .then( (response) => response.json() )
      .then( (data) => {
        setweather(data)
      } )
      .catch( (error) => {
        console.log('unable to fetch the API',error)
      } )
  
  }

  return (
    <div>

      <input type="text"
          placeholder='enter city'
          value={city}
          onChange={citychanged}
          style={{
          padding: '10px',
          width: '200px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          marginRight: '10px'
         }}
       />

        <button 
          onClick={handleSearch}
          style={{
          padding: '10px 15px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#007bff',
          color: 'white',
          cursor: 'pointer'
        }}        
        >
          search
        </button>

        <div style={{ marginTop: '20px' }}>
            {weather &&(
              <div>
                  <h2>{weather.name}</h2>
                  <p>{weather.weather[0].description}</p>
                  <p>Temperature: {weather.main.temp}°C</p>
              </div>
            )}
        </div>
   </div>
  )
}

export default App
