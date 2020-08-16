const weatherApi= {
    key:"786aebb5a50d66949ddd4762f89a90c7",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

document.getElementById('search-box').addEventListener('click',(event)=>{
    let cityName = document.getElementById('input-box').value;
    getWeather(cityName);
});

function getWeather(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather=>{
        return weather.json();
    })
    .then(showWeather);
}
function showWeather(weather){
    console.log(weather);

    let cityName = document.getElementById('city-name');
    cityName.innerText= `${weather.name},${weather.sys.country}`;

    let currentTemperature = document.getElementById('temperature');
    currentTemperature.innerHTML =`${Math.round(weather.main.temp)}&deg;C`;

    let minMax = document.getElementById('min-max');
    minMax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherType = document.getElementById('lead');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    let icon = document.getElementById('Weather-icon');
    let showIcon = weather.weather[0].icon;
    icon.setAttribute ( 'src',"https://openweathermap.org/img/wn/" + showIcon +'@2x' + ".png");
    background(weatherType);
}

function dateManage(dateArg){
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let date = dateArg.getDate();
    let year =  dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let day = days[dateArg.getDay()];
    return `${date}${month} (${day}),${year}`;

}
function background(weather){
    if(weather.textContent == 'Clear')
    {
        document.body.style.backgroundImage = "url('images/clear.jpg')";
    }
    else if(weather.textContent == 'Clouds')
    {
        document.body.style.backgroundImage = "url('images/clouds.jpg')";
    }
    else if(weather.textContent == 'Haze')
    {
        document.body.style.backgroundImage = "url('images/haze.jpg')";
    }
    else if(weather.textContent == 'Rain')
    {
        document.body.style.backgroundImage = "url('images/rain.jpg')";
    }
    else if(weather.textContent == 'Snow')
    {
        document.body.style.backgroundImage = "url('images/snow.jpg')";
    }
    else if(weather.textContent == 'Thunderstorm')
    {
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
    }


}