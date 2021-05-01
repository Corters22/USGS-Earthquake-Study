# USGS Earthquake Study

![usgs logo](https://github.com/Corters22/leaflet-challenge/blob/main/Leaflet-Step-1/images/1-Logo.png)

## Background

Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. 

The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

## Data

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and pick a data set to visualize. When you click on a data set, for example 'All Earthquakes from the Past 7 Days', you will be given a JSON representation of that data. You will be using the URL of this JSON to pull in the data for our visualization. For the included files, data was chosen from the past 7 Days, [M4.5+ Earthquakes](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson). You can find a sample of the json below.
    
![geojson pic](https://github.com/Corters22/leaflet-challenge/blob/main/Leaflet-Step-1/images/screenshot%20-%20geojson.PNG)

If you choose to pick a different data set, replace the url variable on line 34 in [logic.js](https://github.com/Corters22/leaflet-challenge/blob/main/Leaflet-Step-1/static/js/logic.js). The format of the geojson should be the same but make sure before running the code on a new dataset.

## Directories/Files

    A. Leaflet-Step-1
        1. Images
            **includes screen shots**
        2. Static
            a. css
                -style.css
            b. data
                -PB2002_boundaries.json
            c. js
                -logic.js
        4. index.html
