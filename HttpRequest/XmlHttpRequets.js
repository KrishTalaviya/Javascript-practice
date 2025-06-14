/* const firstRequest=new XMLHttpRequest();
firstRequest.addEventListener('load',function(){
    console.log("It worked");
    
});
firstRequest.addEventListener('error',function () {
    console.log("It failed");
})
firstRequest.open('GET',"https://api.restful-api.dev/objects");
firstRequest.send() */
/* const secondRequest=new XMLHttpRequest();
secondRequest.onload=function(){
  console.log("It worked");
}
secondRequest.onerror=function(){
  console.log("It failed");
}
firstRequest.open('GET',"https://api.restful-api.dev/objects");
firstRequest.send() */

function sendHttpRequest(method,url,data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function () {
      resolve(this.responseText); // pass response text
    });

    xhr.addEventListener("error", function () {
      reject("Network Error");
    });

    xhr.open(method, url);
    xhr.send(data);
  });
}

function fetchAndRenderPlanets() {
  sendHttpRequest("GET","https://swapi.py4e.com/api/planets/")
    .then(function (responseText) {
      const Jsonplanets = JSON.parse(responseText);
      const planets = Jsonplanets.results;

      const planetContainer = document.getElementById("planet-container");

      planets.forEach((planet) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <h2>${planet.name}</h2>
          <ul>
            <li><strong>Climate:</strong> ${planet.climate}</li>
            <li><strong>Diameter:</strong> ${planet.diameter} km</li>
            <li><strong>Gravity:</strong> ${planet.gravity}</li>
            <li><strong>Orbital Period:</strong> ${
              planet.orbital_period
            } days</li>
            <li><strong>Rotation Period:</strong> ${
              planet.rotation_period
            } hrs</li>
            <li><strong>Population:</strong> ${planet.population}</li>
            <li><strong>Surface Water:</strong> ${planet.surface_water}%</li>
            <li><strong>Terrain:</strong> ${planet.terrain}</li>
          </ul>
          <div class="residents">
            <strong>Residents:</strong>
            <ul>
              ${planet.residents
                .map(
                  (url) =>
                    `<li><a href="${url}" target="_blank">${url}</a></li>`
                )
                .join("")}
            </ul>
          </div>
        `;

        planetContainer.appendChild(card);
      });
    })
    .catch(function (err) {
      console.error("Fetch failed:", err);
    });
}


// Make sure this runs after DOM loads
window.onload = fetchAndRenderPlanets;
