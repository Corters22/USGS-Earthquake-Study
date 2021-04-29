var myMap = L.map('map', {
    center: [37.0902, -95.7129],
    zoom: 2
})

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'

function markerSize(mag) {
    return mag * 100;
}

function markerColor(depth) {
    if (depth >90) {
        return 'red'}
    else if (depth >70) {
        return 'orangered'}
    else if (depth > 50) {
        return 'orange'}
    else if (depth > 30) {
        return 'gold'}
    else if (depth > 10) {
        return 'yellow'}
    else {return 'greenyellow'}
    };

d3.json(url).then(function(data) {
    console.log('data', data)
    var quakeMarkers = []

    for (i=0; i< data.features.length; i++) {
        var feature = data.features[i];
        var lat = feature.geometry.coordinates[1];
        var long = feature.geometry.coordinates[0];
        var magnitude = feature.properties.mag;
        var location = feature.properties.place;
        var depth = feature.geometry.coordinates[2];
        console.log('magnitude:', magnitude);
        console.log('lat:', lat, 'long:', long);
        console.log('depth', depth)
        quakeMarkers.push(
            L.circle([lat, long], {
                stroke: false,
                fillOpacity: 0.75,
                color: 'white',
                fillColor: markerColor(depth),
                radius: markerSize(magnitude)
            }))
        }
        if (lat) {
            console.log(quakeMarkers)
            var markers = L.marker([quakeMarkers]).addTo(myMap);
            markers.bindPopup(location + "<br> Magnitude:" + magnitude);
        }     
    

    // L.geoJson(data).addTo(myMap);

});