// Write your JavaScript code here!

window.addEventListener("load", function() {
     const formSubmit= document.querySelector("input[name=formSubmit]");
     const pilot= document.querySelector("input[name=pilotName]");
     const copilot= document.querySelector("input[name=copilotName]");
     const fuelLevel = document.querySelector("input[name=fuelLevel]");
     const cargoMass = document.querySelector("input[name=cargoMass]");
     const pilotStatus= document.getElementById("pilotStatus");
     const copilotStatus= document.getElementById("copilotStatus");
     const fuelStatus= document.getElementById("fuelStatus");
     const cargoStatus= document.getElementById("cargoStatus");
     const launchStatus= document.getElementById("launchStatus");
     const missionTarget= document.getElementById("missionTarget");
formSubmit.addEventListener('click', (event)=>{
formSubmission(pilot, copilot, fuelLevel, cargoMass, pilotStatus, copilotStatus, fuelStatus, cargoStatus, launchStatus);
event.preventDefault();
});






    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });
//  event.preventDefault();