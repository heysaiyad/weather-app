const apiKey = '8aefbeb6b3bc7e3d7d9f5a9656419ea6';
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const getWeather =async (city) =>{
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
}

export default getWeather;