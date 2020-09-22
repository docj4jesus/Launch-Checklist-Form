// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus= document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");

   form.addEventListener("submit", function(event) {
     event.preventDefault();  

     let pilotName = document.querySelector("input[name=pilotName]");
     let copilotName = document.querySelector("input[name=copilotName]");
     let fuelLevel = document.querySelector("input[name=fuelLevel]");
     let cargoMass = document.querySelector("input[name=cargoMass");

     if (pilotName.value === ""|| copilotName.value === ""|| fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");

     } else if (isNaN(Number(pilotName.value)) === false || isNaN(Number(copilotName.value)) === false || isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value))) {
         alert("Please enter valid information in each field!");

     } else {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `${pilotName.value} is ready.`;
         copilotStatus.innerHTML = `${copilotName.value} is ready.`;

         if(Number(fuelLevel.value) < 10000 && Number(cargoMass.value) < 10000) {
            fuelStatus.innerHTML = "There is not enough fuel for the journey.";
            cargoStatus.innerHTML = "Cargo mass low enough for launch.";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";

         } else if (Number(fuelLevel.value) > 10000 && Number(cargoMass.value) > 10000) {
            fuelStatus.innerHTML = "Fuel level high enough for launch.";
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";

         } else if (Number(fuelLevel.value) < 10000 && Number(cargoMass.value) > 10000) {
            fuelStatus.innerHTML = "There is not enough fuel for the journey.";
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";

         } else {
            launchStatus.innerHTML = "Shuttle is ready for launch.";
            launchStatus.style.color = "green";
         }
      }
   });

//ORIGINAL CODE THAT DOES NOT QUITE WORK
      //    if (Number(fuelLevel.value) < 10000) {
      //       fuelStatus.innerHTML = "There is not enough fuel for the journey.";
      //       launchStatus.innerHTML = "Shuttle not ready for launch.";
      //       launchStatus.style.color = "red";
      //    } else {
      //       fuelStatus.innerHTML = "Fuel level high enough for launch."
      //       launchStatus.innerHTML = "Shuttle is ready for launch.";
      //       launchStatus.style.color = "green";
      //    }

      //    if (Number(cargoMass.value) > 10000) {
      //       cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
      //       launchStatus.innerHTML = "Shuttle not ready for launch.";
      //       launchStatus.style.color = "red";
      //    } else {
      //       cargoStatus.innerHTML = "Cargo mass low enough for launch."
      //       launchStatus.innerHTML = "Shuttle is ready for launch.";
      //       launchStatus.style.color = "green";
      //    }

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget")
         div.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[3].name}</li>
               <li>Diameter: ${json[3].diameter}</li>
               <li>Star: ${json[3].star}</li>
               <li>Distance from Earth: ${json[3].distance}</li>
               <li>Number of Moons: ${json[3].moons}</li>
            </ol>
         <img src="${json[3].image}"></img>`
      });
   });

});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
