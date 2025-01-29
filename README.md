# Netflix GPT

-Create React App
-Configured TailwindCS
-Header
-Routing
-Login Form
-Sign Up
-Validating Form.
-useref hook for refernecing email, password and name.
-Authentication through(google firebase)
-->Installing firebase
-->enabled email, password authentication
-->Installing firebase CLI-->firebase login
-->initialize firebbase with firebase login and the select hoisting.
--->npm dun build
-->Deploy using command firebase deploy to production
--->open the given link

-Create signup user page in firebase
-Implement signin user
-Created redux store with userslice
-Implemented Sign out
-Update Profile(name, photo)
-BugFix: Sign up user displayName and profile picture update
-BugFix: If the user is not logged in Redirect/ browse to Login Page and Vice-versa.
-Unsubscribe to onAuthStateChanged callback
-Put hardcoded values to the constants file.
-Register on TMDB API & create an app & get aaccess token
-Get data from TMDB now playing movies list API from the documentation
-custom hook from nowPlayingMovies
-updated store by adding movieSlice and adding movie data to it.
-planing for MainContainer & secondaryContainer
-fetch data for trailer video
-Update store with trailer video data
-embedded the youtube video and make it autoplay and mute
-added tailwind css to malke main cobtainer look awesome
-Build Secondary Container
-Build Movie List
-Build Movie Card
-TMDB IMG CDN URL
-Mage the browse page amazing with tailwind CSS.
-usePopularMovies custom hook
-GPT Search Page
-GPT Search Bar
-Multi-language Feature in our app
-Integrate GPT APIS(get open api)
-Gpt search api call
-fetched gpt movies suggestions from tmdb
-gptslice and added data
-reused movie list component to make movie suggeston container
-memoization
-adding .env file and adding it to gitignore
-mage our page responsive

- #Features
  _Not Logged In_
  sign in/ sign out page
  _Browse Page_(after authentication)
  --Header
  --Main Movie
  ---Trailer in bg
  ---Tile, description, play button
  --Movie Suggestion
  ---Movie Lists \* N
  --Netflix GPT
  ---Search Bar
  --Movie Suggestions
