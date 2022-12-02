// Validating the input flight number on home page 
function validateArrival(){
    let flightNum = document.getElementById("arrival-text");
    localStorage.setItem('flight', flightNum.value);
    console.log(flightNum.value);
    if(flightNum.value == "AA6555"){
        document.location = 'packages.html?flight=AA6555';
    } else if (flightNum.value == "AA44"){
        document.location = 'packages.html?flight=AA44';
    } else {
        alert("Please enter the AA6555 or AA44 for arrival flight!");
    }
}

// Populating the packages page with flight info from home page
if(window.location.pathname == '/packages.html'){
    let flightJSON = localStorage.getItem('flight');
    console.log(flightJSON);
    let card1 = document.getElementById("card1");
    let card2 = document.getElementById("card2");

    if(flightJSON == "AA6555"){
    } else if(flightJSON == "AA44"){
        card1Change = document.getElementById("card1-change");
        card1.innerHTML = card1Change.innerHTML;
        card2Change = document.getElementById("card2-change");
        card2.innerHTML = card2Change.innerHTML;
    }
}


// Get the query string for each page
const queryString = window.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);
let packageType, flightQ;

if (params.get('package') != null){
    packageType = params.get('package');
    console.log(packageType);
}
if (params.get('flight') != null){
    flightQ = params.get('flight');
    console.log(flightQ); //as in flight query
}


// Confirm page flight number
if (document.getElementById("confirm-trip-name") != null) {
    let confirmP = document.getElementById("confirm-trip-name");
    console.log(packageType);
    console.log(packages[packageType]);
    confirmP.innerText = packages[packageType].name;
}
