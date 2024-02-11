// getting userInput
let userVal = document.getElementById('userInp');

// get current weather containers
let display = document.getElementById('out');
let temperature = document.getElementById('temp');
let symbol = document.getElementById('icon');
let state = document.getElementById('text');


// get days containers


async function onSubmit(){
let location = userVal.value;
// fetching Api
let data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=23fcc5d639524b19b2c142225241002&q=${location}&days=5`);
let weatherData = await data.json();
console.log(weatherData)

console.log(weatherData.forecast.forecastday[0].date);
console.log(weatherData.forecast.forecastday[1].date);
console.log(weatherData.forecast.forecastday[2].date);
console.log(weatherData.forecast.forecastday[3].date);
console.log(weatherData.forecast.forecastday[4].date)

// Setting up Current Weather
display.innerHTML = weatherData.location.name
temperature.innerHTML = weatherData.current.temp_c;
symbol.innerHTML = `<img src="${weatherData.current.condition.icon}" alt="icon" class="w-20 h-20 ">`;
state.innerHTML = weatherData.current.condition.text;


}

