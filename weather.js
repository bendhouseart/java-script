// This js takes user input from an html file in the 
// form of either a 5 digit zip code or a city and state
// and returns the weather for any location matching that 
// location in the united states of america

// below we initialize the global variables that will be packaged
// and submitted to retrieve the weather

var i = 1;

// this function will gather the user input from our html page
// determine whether it is in the form of city state or 5 digit
// zip code and then update the global variables to reflect said
// input.
function getLoc() {
//	event.preventDefault();		//console.log(data)
	var userInput = $("#loc").val();
	var	break_condition = true;
//	var weatherLoc = 97123;
//	var zip_or_city_state = 'zip' //zip for zip, and value of q for city/state
	var package = {};
	package['APPID'] = '0de4ba8217e33c57978bb8286eeef89e';
	console.log(package);//, 'line 23');
	while (break_condition) {
	try {
		if (parseInt(userInput) ===  parseInt(userInput, 10)){
				// add city, state catch here
				var	zip_or_city_state = 'zip';
				var	weatherLoc = userInput;
				break_condition = false;}
			else  {
				var	weatherLoc = userInput;
				var zip_or_city_state = 'q';
				break_condition = false;}
	}
	catch(err) {
		console.log('submission error');
		break_condition = false;}
	}
	package[zip_or_city_state] = weatherLoc;
	var response;
	////////////////////////////////////////////////////////////////
	//all calls for weather conditions and changes to the html page
	//as a result will be done from within the success portion of the 
	//ajax snippet below.
	////////////////////////////////////////////////////////////////
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather",
		data: package,
		dataType: "jsonp",
		success: function (data) {
			response = data;
			console.log(data);
			console.log(data.main.name);
			$("#location").html(data.name);
			$("#temperature").html(data.main.temp - 273.15);
			$("#humidity").html(data.main.humidity);
			$("#windVector").html(data.wind.deg);
			$("#windSpeed").html(data.wind.speed);
			$("#cloudCover").html(data.weather[0].description);
			$("#conditions").html(data.weather[0].main);
		}
	});
	return response;
};         	


var icons = {
	"01d": "http://openweathermap.org/img/w/01d.png",
	"01n": "http://openweathermap.org/img/w/01n.png",
	"02d": "http://openweathermap.org/img/w/02d.png",
	"02n": "http://openweathermap.org/img/w/02n.png",
	"03d": "http://openweathermap.org/img/w/03d.png",
	"03n": "http://openweathermap.org/img/w/03n.png",
	"04d": "http://openweathermap.org/img/w/04d.png",
	"04n": "http://openweathermap.org/img/w/04n.png",
	"09d": "http://openweathermap.org/img/w/09d.png",
	"09n": "http://openweathermap.org/img/w/09n.png",
	"10d": "http://openweathermap.org/img/w/10d.png",
	"10n": "http://openweathermap.org/img/w/10n.png",
	"11d": "http://openweathermap.org/img/w/11d.png",
	"11n": "http://openweathermap.org/img/w/11n.png",
	"13d": "http://openweathermap.org/img/w/13d.png",
	"13n": "http://openweathermap.org/img/w/13n.png",
	"50d": "http://openweathermap.org/img/w/50d.png",
	"50n": "http://openweathermap.org/img/w/50n.png"
};

var backGrounds = {
	"01d": "weather_images/clear_sky_d.jpg",
	"01n": "weather_images/clear_sky_n.jpg",
	"02d": "weather_images/few_clouds_d.jpg",
	"02n": "weather_images/few_clouds_n.jpg",
	"03d": "weather_images/scattered_clouds_d.jpg",
	"03n": "weather_images/scattered_clouds_n.jpg",
	"04d": "weather_images/broken_clouds_d.jpg",
	"04n": "weather_images/broken_clouds_n.jpg",
	"09d": "weather_images/shower_rain_d.jpg",
	"09n": "weather_images/shower_rain_n.jpg",
	"10d": "weather_images/rain_d.jpg",
	"10d": "weather_images/rain_n.jpg",
	"11d": "weather_images/thunderstorm_d.jpg",
	"11n": "weather_images/thunderstorm_n.jpg",
	"13d": "weather_images/snow_d.jpg",
	"13n": "weather_images/snowe_n.jpg",
	"50d": "weather_images/mist_d.jpg",
	"50n": "weather_images/mist_n.jpg"
};


// here we call the function getLoc on button press of the submit button
$("#loc_button").click(getLoc);



