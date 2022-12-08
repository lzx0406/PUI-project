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
if(window.location.pathname.endsWith('/packages.html')){
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
let packageType, flightQ;
if (queryString != null){
    const params = new URLSearchParams(queryString);
    console.log(params);

    if (params.get('package') != null){
        packageType = params.get('package');
        console.log(packageType);
    }
    if (params.get('flight') != null){
        flightQ = params.get('flight');
        console.log(flightQ); //as in flight query
    }
}

//Detail page populate content
let resortD = "Resorts World New York City is the only casino in NYC, offering guests an unparalleled gaming and entertainment experience. With over 6,500 of the most popular Slot Machines and Electronic Table Games, you are sure to find your favorite.";
let sunsetD = "Multicultural Sunset Park is known for both a booming Chinatown, with noodle shops and dim sum spots, and a diverse Latino community. From a leafy hilltop, the namesake park offers Statue of Liberty views, while pastoral Green-Wood Cemetery is permanent home to famous New Yorkers.";
let centralD = "Central Park is the fifth-largest park in the city, and it is the most visited urban park in the United States, with an estimated 42 million visitors annually as of 2016, and is the most filmed location in the world."
let queensD = "Queens Botanical Garden is a botanical garden located at 43-50 Main Street in Flushing, Queens, New York City. The 39-acre site features rose, bee, herb, wedding, and perennial gardens; an arboretum; an art gallery; and a LEED-certified Visitor & Administration Building."
let ubsD = "UBS Arena is a multi-purpose indoor arena located at Belmont Park in Elmont, New York directly adjacent to the New York City limits. Opened in 2021, it is the home of the New York Islanders of the National Hockey League, replacing Nassau Coliseum."

if(packageType != null){
    let changeList = document.getElementById("detail-list");
    let changePackageT = document.getElementById("package-detail-text");
    let detailTitle = document.getElementById("pa-page-title");

    if(packageType == "5h" && changeList != null){
        detailTitle.innerText = packages[packageType].name;
        changePackageT.innerText = resortD + sunsetD + queensD + ubsD;
        let list5 = "<li>Resorts World</li>" + "<li>Sunset Park</li>" + "<li>Queens Botanical Garden</li>" + "<li>UBS Arena</li>";
        changeList.innerHTML = list5;
    }
    if(packageType == "7h" && changeList != null){
        detailTitle.innerText = packages[packageType].name;
        changePackageT.innerText = resortD + sunsetD + centralD + queensD + ubsD;
        let list7 = "<li>Resorts World</li>" + "<li>Sunset Park</li>" + "<li>Central Park</li>" + "<li>Queens Botanical Garden</li>" + "<li>UBS Arena</li>";
        changeList.innerHTML = list7;
    }
    if(packageType == "3h" && changeList != null){
        detailTitle.innerText = packages[packageType].name;
        changePackageT.innerText = resortD + ubsD;
        let list3 = "<li>Resorts World</li>" + "<li>UBS Arena</li>";
        changeList.innerHTML = list3;
    }
    if(packageType == "4h" && changeList != null){
        detailTitle.innerText = packages[packageType].name;
        changePackageT.innerText = resortD + sunsetD + ubsD;
        let list4 = "<li>Resorts World</li>" + "<li>Sunset Park</li>" + "<li>UBS Arena</li>";
        changeList.innerHTML = list4;
    }
}

// Confirm page flight number
if (document.getElementById("confirm-trip-name") != null) {
    let confirmP = document.getElementById("confirm-trip-name");
    console.log(packageType);
    console.log(packages[packageType]);
    confirmP.innerText = packages[packageType].name;
}
