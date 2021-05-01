# USGS Earthquake Study

![usgs logo](https://github.com/Corters22/leaflet-challenge/blob/main/Leaflet-Step-1/images/1-Logo.png)

## Background

Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. 

The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

## Data

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and pick a data set to visualize. When you click on a data set, for example 'All Earthquakes from the Past 7 Days', you will be given a JSON representation of that data. You will be using the URL of this JSON to pull in the data for our visualization. For the included files, data was chosen from the past 7 Days, [M4.5+ Earthquakes](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson). You can find a sample of the json below.
    
    >features: [
      >{
          >type: "Feature",
          >properties: {
            >mag: 6.8,
            >place: "38 km ESE of Ishinomaki, Japan",
            >time: 1619832447588,
            >updated: 1619838340107,
            >tz: null,
            >url: "https://earthquake.usgs.gov/earthquakes/eventpage/us7000dz5t",
            >detail: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us7000dz5t.geojson",
            >felt: 132,
            >cdi: 6.8,
            >mmi: 5.98,
            >alert: "green",
            >status: "reviewed",
            >tsunami: 1,
            >sig: 801,
            >net: "us",
            >code: "7000dz5t",
            >ids: ",at00qsempq,pt21121000,us7000dz5t,",
            >sources: ",at,pt,us,",
            >types: ",dyfi,ground-failure,impact-link,losspager,moment-tensor,origin,phase-data,shakemap,",
            >nst: null,
            >dmin: 2.598,
            >rms: 0.96,
            >gap: 35,
            >magType: "mww",
            >type: "earthquake",
            >title: "M 6.8 - 38 km ESE of Ishinomaki, Japan"
            >},
            >geometry: {
            >   type: "Point",
            >   coordinates: [
            >       141.6646,
            >       38.2296,
            >       47.3]},
            >id: "us7000dz5t"
       },
