// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    for(let i=0; i< json.length; i++){
    missionTarget.innerHTML += ` <div id="missionTarget" data-testid="missionTarget">
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${json.planetName}</li>
        <li>Diameter: ${json.diameter} km</li>
        <li>Star: ${json.star}</li>
        <li>Distance from Earth: ${json.distance} km from Earth</li>
        <li>Number of Moons: ${json.moons} </li>
    <ol>
    <img src="${json[i].picture}">
</div>  `
    };
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) { //takes a string from a single field
            if (testInput === ""){
                return "Empty";  
            };
            
            if((isNAN(Number(testInput)))){
                return "Not a Number";
            }else{
                return "Is a Number;"
            };
    };
    
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if(validateInput(pilot) === "Empty"){
        alert("Need to enter pilot name!");
    }else{
        pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch`;
    };
    
    if(validateInput(copilot)=== "Empty"){
        alert("Need to enter copilot name!");
    }else{
        copilotStatus.innerHTML= `Co-pilot ${copilot} is ready for launch`
    };

    if(validateInput(fuelLevel) === "Not a Number"){
        alert("Need to enter a valid number");
    }else if(fuelLevel < 10000){
        fuelStatus.innerHTML= "Fuel level too low for launch";
        launchStatus.style="visibility:visible";
        launchStatus.style="color:red";
        launchStatus.innerHTML= "Shuttle Not Ready for Launch";
    }else{
        fuelStatus.innerHTML= "Fuel level high enough for launch";
        launchStatus.style="visibility:visible";
        launchStatus.style= "color:green";
        launchStatus.innerHTML= "Shuttle is Ready for Launch";
    };

    if(validateInput(cargoLevel) === "Not a Number"){
        alert("Need to enter a valid number");
    }else if(cargoStatus > 10000){
        cargoStatus.innerHTML= "Cargo mass too heavy for launch";
        launchStatus.style="visibility:visible";
        launchStatus.style="color:red";
        launchStatus.innerHTML= "Shuttle Not Ready for Launch";
    }else{
        cargoStatus.innerHTML= "Cargo mass low enough for launch";
        launchStatus.style="visibility:visible";
        launchStatus.style="color:green";
        launchStatus.innerHTML= "Shuttle is Ready for Launch";
    };
 };
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch (`https://handlers.education.launchcode.org/static/planets.json`).then( function(response) {
        console.log(response)
             });
 
     return planetsReturned;
 };
 
 function pickPlanet(planets) {
    let randomPlanet= Math.random(planets);
    return randomPlanet;
    //math.random()
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;