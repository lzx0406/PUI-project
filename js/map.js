let map, map1;
let map2;
let map3;

let mapD;
const jfk = { lat: 40.642353347664, lng: -73.77842756514062 };

function initMap() {
  if (document.getElementById("map") != null){
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.682353347664, lng: -73.83842756514062 },
      zoom: 11,
    });

    const marker = new google.maps.Marker({
      position: jfk,
      map: map,
    });
    const marker1 = new google.maps.Marker({
      position: { lat: 40.67329133426266, lng: -73.83258451580777},
      map: map,
    });
    const marker2 = new google.maps.Marker({
      position: { lat: 40.653085813847326, lng: -74.00898778788401},
      map: map,
    });
    const marker3 = new google.maps.Marker({
      position: { lat:  40.75117784213068, lng: -73.82615147864537},
      map: map,
    });
    const marker4 = new google.maps.Marker({
      position: { lat:  40.71200152293058, lng: -73.72599688697093},
      map: map,
    });
  }

  if (document.getElementById("map1") != null){
    map1 = new google.maps.Map(document.getElementById("map1"), {
      center: { lat: 40.682353347664, lng: -73.83842756514062 },
      zoom: 11,
    });
  }
}

function initMap1() {
  map1 = new google.maps.Map(document.getElementById("map1"), {
    center: { lat: 40.682353347664, lng: -73.83842756514062 },
    zoom: 11,
  });
}

if (document.getElementById("map") != null) {
  window.initMap = initMap;
} else if (document.getElementById("map1") != null){
  // window.initMap1 = initMap1;
}


