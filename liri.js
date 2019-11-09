// code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// code required to import the `keys.js` file and store it in a variable.
var keys = require("./keys.js");

// access keys information 
// var spotify = new Spotify(keys.spotify);

// Node module imports needed to run the functions
    var fs = require("fs"); //reads and writes files
    var request = require("request");
    var Spotify = require('node-spotify-api');
    var liriArgument = process.argv[2];
    var userINPUT = process.argv[3];

    // Node module imports needed to run moments npm
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
// Spotify function, Spotify api

    function spotifyThisSong() {
        var spotify = new Spotify(keys.spotify);
        var songName = userINPUT;
        var space = "\n" + "\n" +"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
        if(!songName){
            SongName = "What's my age again";
        }

        params = songName;
        spotify.search({ type: 'track', query: params }, function(err, data) {
            if ( err ) {
                console.log('Error occurred: ' + err);
                return;  
            }
            else{
                output = space + "================= LIRI FOUND THIS FOR YOU...==================" + 
                space + "Song Name: " + "'" +songName.toUpperCase()+ "'" +
                space + "Album Name: " + data.tracks.items[0].album.name +
                space + "Artist Name: " + data.tracks.items[0].album.artists[0].name +	
                space + "URL: " + data.tracks.items[0].album.external_urls.spotify + "\n\n\n";
                console.log(output);
                    
                    fs.appendFile("log.txt", output, function (err) {
                        if (err) throw err;
                        console.log('Saved!');
                    });		
                };
        });
            
    }

//=================================================================
    // Movie function, OMDB api
    
	function movieThis(){
		var movie = userINPUT;
		if(!movie){
			movie = "mr nobody";
		}
		movieName = movie
		request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var movieObject = JSON.parse(body);
				var space = "\n" + "\n" +"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0";
				//console.log(movieObject); // Show the text in the terminal
				var movieResults = " ===================== LIRI PROVIDED THIS DATA FOR YOU...====================\n" + 
				space + "Title: " + movieObject.Title + 
				space + "Year: " + movieObject.Year + 
				space + "Imdb Rating: " + movieObject.imdbRating+ 
				space + "Country: " + movieObject.Country + 
				space + "Language: " + movieObject.Language +
				space + "Rotten Tomatoes Rating: " + movieObject.tomatoRating + 
				space + "Rotten Tomatoes URL: " + movieObject.tomatoURL + "\n\n\n" + 
				space + "***[MORE INFO BELOW]*** \n\n\n" + 
				"\nActors: ===> " + movieObject.Actors + "\n" +
				"\nPlot:  ===> " + movieObject.Plot + "\n" +
				"\n====== LIRI ====== LIRI ====== LIRI ====== LIRI====== LIRI ====== LIRI ======" + "\n" + "\n";
				
				console.log(movieResults);
				fs.appendFile("log.txt", movieResults, function (error) {
				  if (error) throw error;
				  console.log("saved!");
				});
				// console.log(movieObject);
			} else {
				console.log("Error :"+ error);
				return;
			}
		});
    };
    
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