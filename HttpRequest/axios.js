axios.get('https://swapi.py4e.com/api/planets/').then(
    (response)=>{
        const {data}=response;
        console.log(data)
    }
).catch((error)=>{
    console.log(error);
})
// ********************************
// CHAINING REQUESTS USING AXIOS
// ********************************
const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
	console.log(url);
	return axios.get(url);
};
const printPlanets = ({ data }) => {
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  } // ********************************
  // CHAINING REQUESTS USING AXIOS
  // ********************************
  const fetchNextPlanets = (url = "https://swapi.co/api/planets/") => {
    console.log(url);
    return axios.get(url);
  };
  const printPlanets = ({ data }) => {
    console.log(data);
    for (let planet of data.results) {
      console.log(planet.name);
    }
    return Promise.resolve(data.next);
  };

  fetchNextPlanets()
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(printPlanets)
    .catch((err) => {
      console.log("ERROR!!", err);
    });

  // ********************************
  // USING FETCH
  // ********************************
  // const checkStatusAndParse = (response) => {
  // 	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

  // 	return response.json();
  // };

  // const printPlanets = (data) => {
  // 	console.log('Loaded 10 more planets...');
  // 	for (let planet of data.results) {
  // 		console.log(planet.name);
  // 	}
  // 	return Promise.resolve(data.next);
  // };

  // const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
  // 	return fetch(url);
  // };

  // fetchNextPlanets()
  // 	.then(checkStatusAndParse)
  // 	.then(printPlanets)
  // 	.then(fetchNextPlanets)
  // 	.then(checkStatusAndParse)
  // 	.then(printPlanets)
  // 	.then(fetchNextPlanets)
  // 	.then(checkStatusAndParse)
  // 	.then(printPlanets)
  // 	.catch((err) => {
  // 		console.log('SOMETHING WENT WRONG WITH FETCH!');
  // 		console.log(err);
  // 	});
  return Promise.resolve(data.next);
};

fetchNextPlanets()
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.catch((err) => {
		console.log('ERROR!!', err);
	});

// ********************************
// USING FETCH
// ********************************
// const checkStatusAndParse = (response) => {
// 	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

// 	return response.json();
// };

// const printPlanets = (data) => {
// 	console.log('Loaded 10 more planets...');
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// 	return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
// 	return fetch(url);
// };

// fetchNextPlanets()
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.catch((err) => {
// 		console.log('SOMETHING WENT WRONG WITH FETCH!');
// 		console.log(err);
// 	});