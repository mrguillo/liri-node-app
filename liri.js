// code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// Node module imports needed to run the functions
    var fs = require("fs"); //reads and writes files
	var Spotify = require('node-spotify-api');
	var keys = require("./keys");
	var axios = require("axios");
    var liriArgument = process.argv[2];
    var userINPUT = process.argv[3];

    var moment = require('moment');
    moment().format();


//=================================================================
// Possible commands for this liri app
	
	switch(liriArgument) {
		case "concert-this": concertThis(); break;
		case "spotify-this-song": spotifyThisSong(); break;
		case "movie-this": movieThis(); break;
		case "do-what-it-says": doWhatItSays(); break;
		// Instructions displayed in terminal to the user
		default: console.log("=========== MY NAME IS LIRI, CHOOSE ONE OF OPTION COMMANDS BELOW: ==============\n" + 
			"\n OPTION: 1. concert-this 'any band name' " +
			"\n OPTION: 2. spotify-this-song 'any song name' "+
			"\n OPTION: 3. movie-this 'any movie name' "+
			"\n OPTION: 4. do-what-it-says."+ "\n\n" +
			"\n**********\nBe sure to put the movie or song name in quotation \nmarks if it's more than one word.\n**********\n\n\n");
    }


// =================================================================
	// concert-this <artist/band name here> function

	//BANDS IN TOWN

	function concertThis(){
		var artist = userINPUT;
		var space = "\n" + "\n" +"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
		console.log(space);
		if (artist === undefined) {
			artist = "Celine Dion"
			console.log("Liri is executing concert-this for " + artist + " ...");
		} 

		axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
		.then(function(response) {
			console.log('UP TO THIS POINT')
			// console.log(response)
			response.data.forEach(concert => {
				// console.log(space);
				console.log("---------------------------------------------------");
				console.log(concert.venue.name)
				console.log(concert.venue.city + ", " + (concert.venue.region || concert.venue.country))
				console.log(moment(concert.datetime).format("MM/DD/YYYY"));
				})
				console.log("\n====== LIRI ====== LIRI ====== LIRI ====== LIRI====== LIRI ====== LIRI ======" + "\n" + "\n");
		})
		.catch(function(error) {
			if (error.response) {
			  // The request was made and the server responded with a status code
			  // that falls out of the range of 2xx
			  console.log("---------------Data---------------");
			  console.log(error.response.data);
			  console.log("---------------Status---------------");
			  console.log(error.response.status);
			  console.log("---------------Status---------------");
			  console.log(error.response.headers);
			} else if (error.request) {
			  // The request was made but no response was received
			  // `error.request` is an object that comes back with details pertaining to the error that occurred.
			  console.log(error.request);
			} else {
			  // Something happened in setting up the request that triggered an Error
			  console.log("Error", error.message);
			}
			console.log(error.config);
		  });
	}

			

// =================================================================
	// Spotify function, Node Spotify API

    function spotifyThisSong() {
		console.log('Liri is using the Spotify function...');
		var spotify = new Spotify({
			id: '27a8864ac89a46a0b05ff38922f61f58',
			secret: '6396ce8169954f6c9edf68c72af394ab'
		});
		var songName = userINPUT;
		var space = "\n" + "\n" +"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
		if(songName === undefined){
			songName = "the sign ace of base";
			spotify.search({ type: 'track', query: songName }, function(err, data) {
				if (err) {
				  return console.log('Error occurred: ' + err);
				}
				output = space + "================= LIRI FOUND THIS FOR YOU...==================" + 
				space + "Song Name: " + "'" + songName.toUpperCase()+ "'" +
				space + "Artist Name: " + data.tracks.items[0].album.artists[0].name +	
				space + "Album Name: " + data.tracks.items[0].album.name +
				space + "URL: " + data.tracks.items[0].album.external_urls.spotify + "\n\n\n" +
				"\n====== LIRI ====== LIRI ====== LIRI ====== LIRI====== LIRI ====== LIRI ======" + "\n" + "\n";
				console.log(output);
			//   console.log(data); 
			  });
		} else {
			spotify.search({ type: 'track', query: songName }, function(err, data) {
				if (err) {
				  return console.log('Error occurred: ' + err);
				}
				output = space + "================= LIRI FOUND THIS FOR YOU...==================" + 
				space + "Song Name: " + "'" + songName.toUpperCase()+ "'" +
				space + "Artist Name: " + data.tracks.items[0].album.artists[0].name +	
				space + "Album Name: " + data.tracks.items[0].album.name +
				space + "URL: " + data.tracks.items[0].album.external_urls.spotify + "\n\n\n" +
				"\n====== LIRI ====== LIRI ====== LIRI ====== LIRI====== LIRI ====== LIRI ======" + "\n" + "\n";
				console.log(output);
			//   console.log(data); 
			  });
		}
	}


//=================================================================
	// Movie function, OMDB api

	function movieThis(){
		var movie = userINPUT;
		if(movie === undefined){
			movie = "mr nobody";
			var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
			console.log('Searching info about ' + movie + ' ...');
		} else {
			var movieName = movie;
			var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
			console.log('Searching info about ' + movieName + ' ...');
		}
		axios.get(queryUrl).then(
			function(response) {
				var space = "\n" + "\n" +"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
				var movieResults = " ===================== LIRI PROVIDED THIS DATA FOR YOU...====================\n" + 
				space + "Title: " + response.data.Title + 
				space + "Year: " + response.data.Year + 
				space + "Genre: " + response.data.Genre +  
				space + "Imdb Rating: " + response.data.imdbRating+ 
				space + "Country: " + response.data.Country + 
				space + "Director: " + response.data.Director + "\n\n\n" + 
				space + "***[MORE INFO BELOW]*** \n\n" + 
				"\nActors: ===> " + response.data.Actors + "\n" +
				"\nPlot:  ===> " + response.data.Plot + "\n" +
				"\n====== LIRI ====== LIRI ====== LIRI ====== LIRI====== LIRI ====== LIRI ======" + "\n" + "\n";
				console.log(space);
				console.log(movieResults);
			})
			.catch(function(error) {
			  if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.log("---------------Data---------------");
				console.log(error.response.data);
				console.log("---------------Status---------------");
				console.log(error.response.status);
				console.log("---------------Status---------------");
				console.log(error.response.headers);
			  } else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an object that comes back with details pertaining to the error that occurred.
				console.log(error.request);
			  } else {
				// Something happened in setting up the request that triggered an Error
				console.log("Error", error.message);
			  }
			  console.log(error.config);
			});
		}
    
    // =================================================================
	// doWhatItSays function, fs Node Package
	var array_this = [];
	function doWhatItSays() {
		
		fs.readFile("random.txt", 'utf8' ,function(error, data) {
			if (error) throw error;
			// a = data.split(',');
			loggedTxt = data.split(',');
			console.log(loggedTxt);

			var command;
			var parameter;

			command = loggedTxt[0];
			parameter = loggedTxt[1];

			parameter = parameter.replace('"', '');
			parameter = parameter.replace('"', '');
			// console.log(parameter);

			switch (command) {
			   case 'my-tweets':
			       userINPUT = parameter;
			       myTweets();
			       break;

			   case 'spotify-this-song':
			       userINPUT = parameter;
			       spotifyThisSong();
			       break;

			   case 'movie-this':
			       userINPUT = parameter;
			       movieThis();
			       break;
			}
		});

	}