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
//	event.preventDefault();
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
	////////////////////////////////////////////////////////////////
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather",
		data: package,
		dataType: "jsonp",
		success: function (data) {
			console.log(data)
		}
	});
	return package;
};         	

function getWeather () {
};

$("#loc_button").click(getLoc);


