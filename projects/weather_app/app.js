// getting userInput
let userVal = document.getElementById('userInp');

// get current weather containers
let display = document.getElementById('out');
let temperature = document.getElementById('temp');
let symbol = document.getElementById('icon');
let state = document.getElementById('text');


// getting days container
// let day1 = document.getElementById('d1');
let day2 = document.getElementById('d2');
let day3 = document.getElementById('d3');
let day4 = document.getElementById('d4');
let day5 = document.getElementById('d5');
let day6 = document.getElementById('d6');
let day7 = document.getElementById('d7');


// get days containers


async function onSubmit(){
let location = userVal.value;
// fetching Api
let data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=23fcc5d639524b19b2c142225241002&q=${location}&days=7`);
let weatherData = await data.json();
console.log(weatherData)


// Setting up Current Weather
display.innerHTML = weatherData.location.name
temperature.innerHTML = weatherData.current.temp_c;
symbol.innerHTML = `<img src="${weatherData.current.condition.icon}" alt="icon" class="w-20 h-20 ">`;
state.innerHTML = weatherData.current.condition.text;




// converting date to days logic
let days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let date1 = new Date(weatherData.forecast.forecastday[0].date);
let date2 = new Date(weatherData.forecast.forecastday[1].date);
let date3 = new Date(weatherData.forecast.forecastday[2].date);
let date4 = new Date(weatherData.forecast.forecastday[3].date);
let date5 = new Date(weatherData.forecast.forecastday[4].date);
let date6 = new Date(weatherData.forecast.forecastday[5].date);
let date7 = new Date(weatherData.forecast.forecastday[6].date);

// let dayName1 = days[date1.getDay()];
let dayName2 = days[date2.getDay()];
let dayName3 = days[date3.getDay()];
let dayName4 = days[date4.getDay()];
let dayName5 = days[date5.getDay()];
let dayName6 = days[date6.getDay()];
let dayName7 = days[date7.getDay()];






let day2Temp = weatherData.forecast.forecastday[1].day.avgtemp_c;
let day2Stat = weatherData.forecast.forecastday[1].day.condition.text;
let day2Icon = weatherData.forecast.forecastday[1].day.condition.icon;

//// Setting upcoming weather
// day1.innerHTML = dayName1
day2.innerHTML = ` <ul>  <li>${dayName2} </li>  <li>${day2Temp}</li>  <li><img src="${day2Icon}" alt="icon class="w-14 h-14" /></li> <li>${day2Stat}</li> </ul>`
day3.innerHTML = dayName3
day4.innerHTML = dayName4
day5.innerHTML = dayName5
day6.innerHTML = dayName6
day7.innerHTML = dayName7

}

