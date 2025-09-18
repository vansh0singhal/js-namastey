console.log("start");

setTimeout(()=>{
    console.log("Timer expired");
},5000);

console.log("end");


let startDate=new Date().getTime();
let endDate=startDate;

while(endDate<startDate+10000){
    endDate=new Date().getTime();
}

console.log("while expires");

setTimeout(()=>{
    console.log("settimer of 0");
},0)