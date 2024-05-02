// Write your JavaScript code here!


window.addEventListener("load", function() {
     const formSubmit= document.getElementById("formSubmit");
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
formSubmit.addEventListener('click', async (event)=>{
    event.preventDefault();
    await formSubmission(pilot, copilot, fuelLevel, cargoMass, pilotStatus, copilotStatus, fuelStatus, cargoStatus, launchStatus);

});
let listedPlanets;
// Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse=  myFetch()
listedPlanetsResponse.then(function (result) {
   listedPlanets = result
    console.log(result);
    return result;
}).then(function () {
    
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let randomPlanet= pickPlanet(listedPlanets);
    console.log(randomPlanet)
    addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
});
    
 });
