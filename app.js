const inputBox = document.querySelector(".inputbox");
const searchbtn = document.querySelector("#serchbtn");
const weather_img = document.querySelector(".weather-image");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#wind-speed");
let URL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
let APIKEY = "fb44f30bda654be5b254909d0687f6b1";

let city;


function setclout(response){
    switch(response.weather[0].main){
        case 'Clouds':
            weather_img.src = "cloud.png";
            break;
        case 'Clear':
            weather_img.src = "clear.png";
            break;
        case 'Rain':
            weather_img.src = "rain.png";
            break;
        case 'Mist':
            weather_img.src = "mist.png";
            break;
        case 'Snow':
            weather_img.src = "snow.png";
            break;
        case 'Fog':
            weather_img.src = "snow.png";
            break;

    }
    description.innerText = response.weather[0].description;
    humidity.innerText = response.main.humidity;
    wind_speed.innerText = response.wind.speed*3.6;

}

async function cheackWeather(city) {
    console.log(city);
    URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
    let response = await fetch(URL).then(response => response.json());
    console.log(response);
    temperature.innerHTML = `${parseInt(response.main.temp - 273.15)}<sup>°C </sup>` ;
    setclout(response);
    if(response.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

}
searchbtn.addEventListener("click" ,()=>{
    cheackWeather(inputBox.value );
    console.log(city);

});
