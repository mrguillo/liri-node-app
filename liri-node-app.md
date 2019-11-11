# liri-node-app


## 1. What is LIRI?

LIRI is a _Language_ Interpretation and Recognition Interface. It is a virtual assistant app developed by MrGuillo as an assignment for the coding Bootcamp. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies helping the user navigate different APIs using npm packages and node.js.

To retrieve the data that powers this app, LIRI sends requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs. These npm packages are crucial for it to work.


   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
   * [Axios](https://www.npmjs.com/package/axios)
     * We use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
   * [Moment](https://www.npmjs.com/package/moment)
   * [DotEnv](https://www.npmjs.com/package/dotenv)

The app uses javascript, node.js and npm technologies and is ment to be used in Terminal or Bash.

## 2. Overview of how LIRI app is structured

The app is comprised of the following sections:
 - The first section has code to read and set any environment variables with the dotenv package.
 - The second section has all the node module imports needed to run the functions (ie. fs, node-spotify-api and its keys, Axios, moment.js, etc. It also includes a set of instructions displayed in terminal to the user).
 - The third section has a switch to handle all the possible user commands for this LIRI app.
 - The following sections have the code for the "concert-this", "Spotify this song",  "Movie this" and "Do what it says" functions.


## 3. Instructions on how to run the app

Open a **Terminal** or **Bash** window, type *node liri.js* and a *command*. The commands that you can ask to LIRI must be in the following format:

	[node] + spacebar + [liri.js] + spacebar + [command] spacebar + ['type a band, song or movie between quotation marks] *then hit the ENTER key*

	You can use LIRI by chosing one of the following commands:

	OPTION: 1. concert-this 'any band name'   
	OPTION: 2. spotify-this-song 'any song name'   
	OPTION: 3. movie-this 'any movie name' "  
	OPTION: 4. do-what-it-says.    

Be sure to put the movie, band or song name in quotation \nmarks if it's more than one word.

## 4. Videos of the app functioning

Watch this video for a demo of LIRI "[concert-this](https://drive.google.com/open?id=18Pp2FsHUJOzrMzuaLfQH4RRIlg6nR_yp)" capabilities.

Watch this video for a demo of LIRI "[spotify-this-song](https://drive.google.com/open?id=1ihlKHxJIySmo3myGRr3l6Oaw3Z71QKh7)" capabilities.

Watch this video for a demo of LIRI "[movie-this](https://drive.google.com/open?id=1NMTE7URK18HpHT-oB9lqavX4cFEI2ZgP)" capabilities.

Watch this video for a demo of LIRI "[do-what-it-says](https://drive.google.com/open?id=1NsN7zzGu_TnEdtz3oGru8QN0ddryagPr)" capabilities.

BONUS! LIRI will log all answers to a file. You can also have a look at a demo [here](https://drive.google.com/open?id=1g32wsnOT2dh7-6PY8APXF5fmOfw6wEK7).


## 5. Link to deployed version of the app

Find [here](https://github.com/mrguillo/liri-node-app) the link to the Git Hub repo where you can find the deployed version of LIRI.

6. Clearly, list the technologies used in the app
7. State your role in the app development


Written by MrGuillo. 
Please don't forget to [Star](https://github.com/mrguillo/liri-node-app) my LIRI repo :D

