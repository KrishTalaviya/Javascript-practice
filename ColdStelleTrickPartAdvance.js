//semicolon problem
 function blah(){
     return
     {
         name:"nik"
     }
 }
 const {name}=blah()
 console.log(name)
//generator function
function* fibonacci(){
    let a=0;
    let b=1;
    while(true){
        yield a;
        [a,b]=[b,a+b];
    }
}
const fiboGenerator=fibonacci();
for(let i=0;i<10;i++){
    let f=fiboGenerator.next()
    console.log(f);
    console.log(f.value);
}
let x=0
const arr=Array.from({length:12},(x)=>{
    
    x++
    return x*2;
})
