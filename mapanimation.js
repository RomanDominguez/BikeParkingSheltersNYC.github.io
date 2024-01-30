// This array contains the coordinates for all bus stops between MIT and Harvard
const bikeStops = [
  [-73.98109555019138,40.68985092532933],
  [-73.94451215478905,40.71471230203185],
  [-73.95815283488757,40.60888029893385],
  [-74.00418544571221,40.654290631076414],
  [-73.98049489893239,40.57567391264483],
  [-73.89429103041087,40.86297019613109],
  [-73.90601188067646,40.849842862422626],
  [-73.989978555,40.73701791033392],
  [-73.99256188367652,40.742698515904735],
  [-73.99808717183724,40.74522816999436],
  [-73.99009279896514,40.71379174465101],
  [-73.95218731600916,40.742658633047895],
  [-73.92150005764297,40.766572706970074],
  [-73.82394086263547,40.68597530941907],
  [-73.84484203907775,40.719916586642114],
  [-74.0661975758172,40.5905069173068],
  [-74.17097248892372,40.56015795513925],
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9ib21hbjEzMTMiLCJhIjoiY2xwdHdrNmc2MGV2aDJqcDlrc2llbGpucCJ9.XCGEa8fAc48nL10Oro1DIQ';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-73.98109555019138,40.68985092532933],
  zoom: 9.5,
});
//

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
let marker = new mapboxgl.Marker().setLngLat([-73.98109555019138,40.68985092532933]).addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
setTimeout(()=>{
if(counter >= bikeStops.length)  // Use counter to access bus stops in the array busStops
return;
marker.setLngLat(bikeStops[counter]); //Use the function marker.setLngLat() to update the marker coordinates
counter++;
move();   // Make sure you call move() after you increment the counter.}
}, 1000);  // move the marker on the map every 1000ms.
} 