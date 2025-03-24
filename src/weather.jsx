import { useState } from "react"
import axios from "axios"
function Weather() {
    const [city, setcity] = useState("")

    const [weather,setweather] = useState("")
    const [temp,settemp] = useState("")
    const [desc,setdesc] = useState("")

    function handleCity(event) {
        setcity(event.target.value)
    }
    function getweather() {
        let weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=acfc39e43a43b9c6d6e37f94ae2092c1`)
        
        weatherData.then(function(success){
           console.log(success.data)
           setweather(success.data.weather[0].main)
           settemp(success.data.main.temp)
           setdesc(success.data.weather[0].description)
        })
    }


    return (
        <div className="bg-blue-400 flex items-start justify-center p-20">
            <div className=" bg-white p-10 m-10 w-96 rounded shadow-lg">
                <h1 className=" text-purple-400 font-medium text-2xl">Weather Report</h1>
                <p>I can give you a weather report about your city!</p>
                <input onChange={handleCity}  type="text" placeholder="Enter your city" className=" p-1 my-3 border focus:outline-none focus: border-purple-500 rounded-lg"></input>
                <br></br>
                <button onClick={getweather}  className="bg-purple-300 text-black p-2 border rounded-md ">Get Report</button>

                <div className=" mt-2">

                    <h1 className="text-purple-400"><b>Weather:</b><span className="text-black">{weather}</span></h1>
                    <h1 className="text-purple-400"><b>Temparature:</b><span className="text-black">{temp}</span></h1>
                    <h1 className="text-purple-400"><b>Description:</b><span className="text-black">{desc}</span></h1>
                </div>
            </div>
        </div>
    )
}
export default Weather