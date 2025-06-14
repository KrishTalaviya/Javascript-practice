const fetchData=async (searchTerm)=>{
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "47b933b7",
        s: searchTerm,
      },
    });
    return response.data.Search;
}


const onInput = async event => {
    const moviesSearched=await fetchData(event.target.value);
    console.log(moviesSearched);

};
const input=document.querySelector('input');
input.addEventListener('input',debounceInput(onInput))
