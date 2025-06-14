//promise way
fetch("https://swapi.py4e.com/api/planets/")
.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err));
//async await way
async function fetchPlanet(){
    try{
const response=await fetch("https://swapi.py4e.com/api/planets/");
   const data=await response.json();
   console.log(data)
    }
    catch(error){
        console.log(error);
    }
   

}
//error handling of response
fetch("https://swapi.py4e.com/api/planets/")
  .then((res) => {
    if(!res.ok){
        throw new Error(`Http error:${res.status}`)
    }
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
  async function fetchPlanet() {
    try {
      const response = await fetch("https://swapi.py4e.com/api/planets/");
      if (!res.ok) {
        throw new Error(`Http error:${res.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
//sending headers and method with fetch request to backend
//method 1
fetch("https://swapi.py4e.com/api/planets/",{method:"GET",headers:{'content-type':'application/json'}})
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Http error:${res.status}`);
    }
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
  //method 2
  const headers=new Headers({
    'content-type':'application/json',
    'authorization':'Bearer gdhcjj1234'
  }
)
fetch("https://swapi.py4e.com/api/planets/", {
  headers
})
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Http error:${res.status}`);
    }
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
  //sending other request
  //post or put
  const payLoad={
    palnetName:"dfd",
    descriotion:"gdfr"
  }
  fetch("https://swapi.py4e.com/api/planets/", {
    method:'POST',
    headers,
    body:JSON.stringify(payLoad)
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Http error:${res.status}`);
      }
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
    //delete
    fetch("https://swapi.py4e.com/api/planets/", {
        method:"DELETE",
      headers,
      body: JSON.stringify(payLoad),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Http error:${res.status}`);
        }
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
      //uploading file using fetch
      async function uploadFile(formData) {
        try {
          const response = await fetch(
            "http://localhost:3001/companies/coltco/upload-logo",
            {
              method: "POST",
              body: formData,
            }
          );
          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }

      const fileInput = document.querySelector("#fileUpload");

      fileInput.addEventListener("change", (e) => {
        console.log("CHANGED!!");
        const formData = new FormData();
        formData.append("logo", fileInput.files[0]);
        uploadFile(formData);
      });