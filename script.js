// Write your JavaScript code here!


window.addEventListener("load", function() {
    const formSubmit= document.getElementById("formSubmit");
    
    
    
    formSubmit.addEventListener('click', async (event)=>{
        event.preventDefault();
        // console.log("form submitted")
        
        const pilot= document.querySelector("input[name='pilotName']").value;
        const copilot= document.querySelector("input[name='copilotName']").value;
        const fuelLevel = Number(document.querySelector("input[name='fuelLevel']").value.trim());
        const cargoMass = Number(document.querySelector("input[name='cargoMass']").value.trim());
        
        // console.log("Fuel Level Value:", fuelLevel);
        // console.log("Cargo Mass Value:", cargoMass);
        // console.log("pilot name", pilot);
        // console.log("copilot name", copilot);
        await formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoMass);
        
    });
    let listedPlanets;
// Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse=  myFetch()
listedPlanetsResponse.then(function (result) {
   listedPlanets = result
    return result;
}).then(function () {
    
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let randomPlanet= pickPlanet(listedPlanets);
    addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
});
    
 });
