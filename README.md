# google-places-scripts
module for server call to google places api

## Set up

Set the environment variables, use `npm install` and run the server from the top level directory via the command line: `$node server`. 

### environment variables:

* PORT: the port you wish to run the server on (defaults to 80)
* PLACES_API_KEY: the Google API key you wish to use to make requests of the Google Places API

## Use

A module that can easily be integrated into a server to provide an endpoint for Google Places nearby places API. This endpoint takes the same URL query string to make the request as nearby search is documented [here](https://developers.google.com/places/webservice/search), but without the API key - which is pulled from the environment variables for requests routed through the server. 

Sample URL for hitting a server running at localhost on port 3000:

'localhost:3000/googleplaces/nearby?location=-33.8670522,151.1957362&radius=500'

