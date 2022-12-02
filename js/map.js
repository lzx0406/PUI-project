let map, map1, map2, map3;
let mapD;

const jfk = { lat: 40.642353347664, lng: -73.77842756514062 };
const resort = { lat: 40.67329133426266, lng: -73.83258451580777};
const sunset = { lat: 40.653085813847326, lng: -74.00898778788401};
const central = { lat: 40.78279839307527, lng: -73.96559413136623};
const queens = { lat:  40.75117784213068, lng: -73.82615147864537};
const ubs = { lat:  40.71200152293058, lng: -73.72599688697093};

function mkjfk(mapNum){
  return (new google.maps.Marker({
    position: jfk,
    label: "0",
    map: mapNum,
  }));
}
function mkresort(mapNum){
  return (new google.maps.Marker({
    position: resort,
    map: mapNum,
  }));
}
function mksunset(mapNum){
  return (new google.maps.Marker({
    position: sunset,
    map: mapNum,
  }));
}
function mkcentral(mapNum){
  return (new google.maps.Marker({
    position: central,
    map: mapNum,
  }));
}
function mkqueens(mapNum){
  return (new google.maps.Marker({
    position: queens,
    map: mapNum,
  }));
}
function mkubs(mapNum){
  return (new google.maps.Marker({
    position: ubs,
    map: mapNum,
  }));
}


const site = document.getElementById("site-intro");
const siteImg = document.getElementById("site-img");
function resortDetail(){
  site.innerText = "Resort World";
  siteImg.innerHTML = "<img id='site-img' src='assets/resort.jpeg' alt='Resort World'>";
}
function sunsetDetail(){
  site.innerText = "Sunset Park";
  siteImg.innerHTML = "<img id='site-img' src='assets/resort.jpeg' alt='Resort World'>";
}
function centralDetail(){
  site.innerText = "Central Park";
  siteImg.innerHTML = "<img id='site-img' src='assets/resort.jpeg' alt='Resort World'>";
}
function queensDetail(){
  site.innerText = "Queens Botanical Garden";
  siteImg.innerHTML = "<img id='site-img' src='assets/resort.jpeg' alt='Resort World'>";
}
function ubsDetail(){
  site.innerText = "UBS Arena";
  siteImg.innerHTML = "<img id='site-img' src='assets/resort.jpeg' alt='Resort World'>";
}


function initMap() {
  //init the first map for 5 hour city trip
  if (document.getElementById("map") != null){
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.702353347664, lng: -73.83842756514062 },
      zoom: 11,
    });

    const marker = mkjfk(map);
    const marker1 = mkresort(map);
    const marker2 = mksunset(map);
    const marker3 = mkqueens(map);
    const marker4 = mkubs(map);
  }

  //init the second map for 7 hour getaway trip
  if (document.getElementById("map1") != null){
    map1 = new google.maps.Map(document.getElementById("map1"), {
      center:  { lat: 40.732353347664, lng: -73.83842756514062 },
      zoom: 11,
    });

    const marker = mkjfk(map1);
    const marker1 = mkresort(map1);
    const marker2 = mksunset(map1);
    const marker5 = mkcentral(map1);
    const marker3 = mkqueens(map1);
    const marker4 = mkubs(map1);
  }

  //init the map for 3 hour trip
  if (document.getElementById("map2") != null){
    map1 = new google.maps.Map(document.getElementById("map2"), {
      center:  { lat: 40.682353347664, lng: -73.83842756514062 },
      zoom: 11,
    });

    const marker = mkjfk(map1);
    const marker1 = mkresort(map1);
    const marker4 = mkubs(map1);
  }

  //init the map for 4 hour trip
  if (document.getElementById("map3") != null){
    map1 = new google.maps.Map(document.getElementById("map3"), {
      center:  { lat: 40.682353347664, lng: -73.83842756514062 },
      zoom: 11,
    });

    const marker = mkjfk(map1);
    const marker1 = mkresort(map1);
    const marker2 = mksunset(map1);
    const marker4 = mkubs(map1);
  }

  //init the detail page map
  if (document.getElementById("mapD") != null){
    let marker, marker1, marker2, marker3, marker4, marker5;
    mapD = new google.maps.Map(document.getElementById("mapD"), {
      center:  { lat: 40.732353347664, lng: -73.83842756514062 },
      zoom: 11,
    });

    if(packageType == "5h"){
      marker = mkjfk(mapD);
      marker1 = mkresort(mapD);
      marker2 = mksunset(mapD);
      marker3 = mkqueens(mapD);
      marker4 = mkubs(mapD);
    }

    if(packageType == "7h"){
      marker = mkjfk(mapD);
      marker1 = mkresort(mapD);
      marker2 = mksunset(mapD);
      marker3 = mkqueens(mapD);
      marker4 = mkubs(mapD);
      marker5 = mkcentral(mapD);
    }

    if(packageType == "3h"){
      marker = mkjfk(mapD);
      marker1 = mkresort(mapD);
      marker4 = mkubs(mapD);
    }

    if(packageType == "4h"){
      marker = mkjfk(mapD);
      marker1 = mkresort(mapD);
      marker2 = mksunset(mapD);
      marker4 = mkubs(mapD);
    }

    if(marker1 != null) {google.maps.event.addListener(marker1, "click", resortDetail)};  
    if(marker2 != null) { google.maps.event.addListener(marker2, "click", sunsetDetail); }
    if(marker3 != null) { google.maps.event.addListener(marker3, "click", queensDetail); }
    if(marker4 != null) { google.maps.event.addListener(marker4, "click", ubsDetail); }
    if(marker5 != null) { google.maps.event.addListener(marker5, "click", centralDetail); }
  }
    

}

// marker.addListener("click", toggleBounce);
// function toggleBounce() {
      //   if (marker.getAnimation() !== null) {
      //     marker.setAnimation(null);
      //   } else {
      //     marker.setAnimation(google.maps.Animation.BOUNCE);
      //   }
      // }


// if (document.getElementById("map") != null) {
//   window.initMap = initMap;
// } else if (document.getElementById("map1") != null){
//   // window.initMap1 = initMap1;
// }
window.initMap = initMap;

