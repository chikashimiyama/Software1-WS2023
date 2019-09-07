const weather = require('weather-js');
const MAX = require('max-api');

MAX.addHandler("get", (city) => {
	weather.find({search: city, degreeType: 'C'}, function(err, result) {
  		if(err) console.log(err);
 
  		MAX.outlet(parseInt(result[0]["current"]["temperature"]));
	});
});


