/**************Date Object In Js */
// Calling Date without the new keyword returns a string representing the current date and time.
//Parameters

//YYYY-MM-DDTHH:mm:ss.sssZ
//If you omit hours, minutes, or seconds, the value will be set to zero.
const dateObjectName = new Date([parameters]);
const today=new Date();
const todayStringParameter=new Date('2025-05-13')
const todayNumParameters=new Date(2025,05,13);

console.log(today);
