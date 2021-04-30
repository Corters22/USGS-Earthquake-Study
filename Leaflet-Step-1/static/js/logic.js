console.log('plate data', boundaries)
var myMap = L.map('map', {
    center: [0, 0],
    zoom: 2    
})

var streetLayer = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

var Stamen_TerrainBackground = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
});

var sat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

var tectonic =  L.geoJson(boundaries, {
    // Passing in our style object
    // style: mapStyle
  }).addTo(myMap);

var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'

function markerSize(mag) {
    return mag * 50000;
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
    // d3.json('data/tectonicplates/GeoJSON/PB2002_boundaries.json').then(function(plates){
    //     console.log("plate data", plates);
    
    console.log('data', data)
    var quakeMarkers = []

    for (i=0; i< data.features.length; i++) {
        var feature = data.features[i];
        var lat = feature.geometry.coordinates[1];
        var long = feature.geometry.coordinates[0];
        var magnitude = feature.properties.mag;
        var location = feature.properties.place;
        var depth = feature.geometry.coordinates[2];
        // console.log('magnitude:', magnitude);
        // console.log('lat:', lat, 'long:', long);
        // console.log('depth', depth);
        quakeMarkers.push(
            L.circle([lat, long], {
                stroke: false,
                fillOpacity: 0.75,
                color: 'white',
                fillColor: markerColor(depth),
                radius: markerSize(magnitude)
            }).bindPopup(location + "<br> Magnitude: " + magnitude))
        }
        // if (lat) {
        //     console.log(quakeMarkers)
        //     var markers = L.marker([quakeMarkers]).addTo(myMap);
        //     markers.bindPopup(location + "<br> Magnitude:" + magnitude);
        // }     
    var quakeLayer = L.layerGroup(quakeMarkers).addTo(myMap);
    var overlayMaps = {
        Earthquakes: quakeLayer,
        'Tectonic Plates': tectonic
    }

    var baseMaps = {
        Street: streetLayer, 
        Satellite: sat, 
        Terrain: Stamen_TerrainBackground
    }
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap)
    
    var legend = L.control({ postion: "bottomright"});
    legend.onAdd = function() {
        var div = L.DomUtil.create("div", "info legend");
        var colors = ['greenyellow', 'yellow', 'gold', 'orange', 'orangered', 'red'];
        var limits = ['-10-10', '10-30', '30-50', '50-70', '70-90', '90+'];
        var labels = [];

        
        var legendInfo = "<h3>Earthquake <br> Depth</h3>";
        
        div.innerHTML = legendInfo;
        
        limits.forEach(function(limit, index) {
            labels.push("<li style=\"background-color: " + colors[index] + "\"></li> " + limits[index] + "<br>");
        });
        console.log(labels)

        div.innerHTML += "<ul>" + labels.join(" ") + "</ul>";
        return div;
    };

    legend.addTo(myMap);
});
// });

//todo: create function to make map
//create function to make markers
//call functions with d3.json