function queryApi(){
    console.log("Making an Api request");
}
/* const input=document.getElementById('input');
let debounceTimeout;
input.addEventListener('input',function(){
    clearTimeout(debounceTimeout);
    debounceTimeout=setTimeout(()=>{
        queryApi();
    },30000)
}) */
const debounceQueryApi=debounce(queryApi,300)
const debounce=(callback,delay)=>{
    return (...args)=>{
        let timeOutId;
        if(timeOutId){
            clearInterval()
        }
    }
}
    const input = document.getElementById("input");
    input.addEventListener('input',function(){
        debounceQueryApi();
    })
