
const apiKye ="fcbbaf160880473286da685a4a781ab3";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl+ city +`&appid=${apiKye}`);
    var data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    // if(data.weather[0].main == "clouds"){
    //     weatherIcon.src = "images/clouds.png"
    // }
    // else if(data.weather[0].main == "clear"){
    //     weatherIcon.src = "images/clear.png";
    // }
    // else if(data.weather[0].main == "Rain"){
    //     weatherIcon.src = "images/rain.png";
    // }
    // else if(data.weather[0].main == "Drizzle"){
    //     weatherIcon.src = "images/drizzle.png";
    // }
    // else if(data.main[0].main == "Mist"){
    //     weatherIcon.src = "images/mist.png";
    // }
}
checkWeather(searchBox.value);
// searchBtn.addEventListener("clikc", ()=>{
//     checkWeather(searchBox.value);
// })
submit.addEventListener("click",()=>{
    checkWeather(city.value)
})


