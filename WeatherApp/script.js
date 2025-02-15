const apiKey="6cbdbb373a3736bd7d92ec4836ebb54e"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q={city name}&appid={API key}"
const weather=document.querySelector(".weather")
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl.replace("{city name}", city).replace("{API key}", apiKey));
    if(response.status== 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".error").style.display="none";
        const data = await response.json();
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
        switch(data.weather[0].main){
            case "Clouds":
                weathericon.src="images/clouds.png";
                break;
            case "Clear":
                weathericon.src="images/cleae.png";
                break;
            case "Rain":
                weathericon.src="images/rain.png";
                break;
            case "Drizzle":
                weathericon.src="images/drizzle.png";
                break;
            case "Mist":
                weathericon.src="images/mist.png";
                break;
        }
        weather.style.display="block";
    
    }
    }

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
});
