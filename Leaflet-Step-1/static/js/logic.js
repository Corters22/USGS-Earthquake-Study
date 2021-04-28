var myMap = L.map('mapid', {
    center: [37.0902, -95.7129],
    zoom: 6
})

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "light-v10",
    accessToken: API_KEY
  }).addTo(myMap);

var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'

var quakeMarkers = []

for (i=0; i< data.features.length; i++) {
    var lat = data.features[i].geometry.coordinates[1];
    var long = data.features[i].geometry.coordinates[0];
    quakeMarkers.push(
        L.circle(lat, long, {
            stroke: false,
            fillOpacity: 0.75,
            color: 'green',
            fillColor: 'green',
            radius: data.features[i].properties.mag
        })
    )
}