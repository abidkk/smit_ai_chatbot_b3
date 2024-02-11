let userVal = document.getElementById('userInp');
let display = document.getElementById('out')

let temperature = document.getElementById('temp');
let symbol = document.getElementById('icon');
let status = document.getElementById('text');



async function onSubmit(){
let location = userVal.value;
let data = await fetch(`http://api.weatherapi.com/v1/current.json?key=23fcc5d639524b19b2c142225241002&q=${location}`);
let weatherData = await data.json();
console.log(weatherData)
display.innerHTML = weatherData.location.country;

display.innerHTML = weatherData.current.temp_c;
symbol.innerHTML = `<img src="${weatherData.current.condition.icon}" alt="icon" class="w-40 h-40 ">`;
status.innerHTML = weatherData.current.condition.text;


}

