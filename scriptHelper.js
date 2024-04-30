// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
            }
            
            if((isNAN(Number(testInput)))){
                return "Not a Number";
            }else{
                return "Is a Number;"
            };
    };
    
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if(validateInput(pilot)=== "Empty"){
        alert("Need to enter pilot name!");
    };

    if(validateInput(copilot)=== "Empty"){
        alert("Need to enter copilot name!");
    };

    if(validateInput(fuelLevel) === "Not a Number"){
        alert("Need to enter a valid number");
    };

    if(validateInput(cargoLevel) === "Not a Number"){
        alert("Need to enter a valid number")
    };
 };
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;