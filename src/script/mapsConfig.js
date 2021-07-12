// Maps Config
function initMap() {
  const myLatLng = { lat: -6.500693, lng: 106.747215 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "SMKN 1 Kemang",
  });
}
  
initMap();
// End Maps Config