var map = L.map('mapAnt').setView([51.217406, 4.420958], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.217406, 4.420958]).addTo(map)
    .bindPopup('Centraal Station<br>Antwerpen')
    .openPopup();

