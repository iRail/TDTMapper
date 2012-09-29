/* Author: Pieter Colpaert
*/



// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([50.5, 5], 7);

// add a CloudMade tile layer with style #997
L.tileLayer('http://{s}.tile.cloudmade.com/29fa5b3931f846feb79ad40bf89a5376/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
//L.marker([51.5, -0.09]).addTo(map).bindPopup('A pretty CSS3 popup. <br> Easily customizable.').openPopup();
