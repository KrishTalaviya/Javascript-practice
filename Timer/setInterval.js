function countDown(timeRemaining,duration){
const h1=document.querySelector('h1');
h1.innerText=timeRemaining;
timeRemaining-=1;
const intervalId=setInterval(()=>{
    h1.innerText = timeRemaining;
    timeRemaining -= 1;
    if(timeRemaining<0){
        clearInterval(intervalId);
        h1.innerText="Times Up!!!"
    }
},duration)
}
countDown(5,1000);