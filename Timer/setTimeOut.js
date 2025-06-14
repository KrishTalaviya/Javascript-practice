setTimeout(function(){
    console.log("hiii")
},2000)
function logSomething(){
    console.log("log in something");
}
setTimeout(logSomething,2000);
function showNotification(message,duration){
    const notification=document.createElement('div');
    notification.textContent=message;
    document.body.appendChild(notification);
    setTimeout(()=>{
        notification.remove();
    },duration)
}
showNotification("liked a post",2000);

function redirectionToGoogle(){
    const timeOutId=setTimeout(()=>{
        window.location.href="https://www.google.com";
    },5000)
    const btn=document.querySelector('#cancelButton')
    btn.addEventListener('click',()=>{
        clearTimeout(timeOutId);
    })
}
redirectionToGoogle();
