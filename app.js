// Create map
const mymap = L.map('issMap').setView([0, 0], 1);
const issIcon = L.icon({
  iconUrl: 'img/icon.png',
  iconSize: [32, 32],
  popupAnchor: [-3, -76],
});
const markericon = L.marker([0, 0], { icon: issIcon }).addTo(mymap);
const attribution = '<a href="https://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';


async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  const { latitude, longitude } = data;

  markericon.setLatLng([latitude, longitude]);

  document.getElementById('lat').textContent = latitude;
  document.getElementById('lon').textContent = longitude;
}

getISS();


