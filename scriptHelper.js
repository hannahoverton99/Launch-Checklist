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
   
    formSubmit.addEventListener('click', () => {
            if (testInput.value===""){
                alert("All fields required");
            };
            if (testInput === ""){
                alert("Empty");
                return false;
            }else if (isNaN(Number(fuelLevel))|| isNaN(Number(cargoMass))){
                alert("Not a Number")
                return false;
            }else if(Number(fuelLevel)|| Number(cargoMass) ) {
                alert("Is a Number");
                return true;
            }; 
        });
        
    };
    
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    validateInput(document);
    validateInput(list);
    validateInput(pilot);
    validateInput(copilot);
    validateInput(fuelLevel);
    validateInput(cargoLevel);

    
 }
 
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