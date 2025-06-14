function getTime(){
    let clock = document.getElementById("clock");
    const now = new Date();
    const localTime = now.toLocaleTimeString();
    clock.textContent=`${localTime}`; 
}
setInterval(getTime,1000)