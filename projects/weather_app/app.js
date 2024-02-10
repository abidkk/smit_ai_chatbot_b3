console.log("Weather App");

async function call(){
  let data = await fetch('http://api.weatherapi.com/v1/current.json');
  let WeatherData = await data.json();
  console.log(WeatherData)
  console.log(123)
}
call()