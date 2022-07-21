let weather = {
    apiKey: "207eb16ebbd38e73e8da82255d4b004f",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey).then(response => response.json()).then(data => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "The current weather in " + name + " is...";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description ;
        document.querySelector(".temp").innerText = temp + "° F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speeds: " + speed + "mph";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search-btn").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
});