//call back function

//asynchronous tasks are possible because of call backs

setTimeout(function(){
    console.log("Timer expired after 5 seconds");
},5000);

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y");
});

// so when you call a function a pass a function in it(y) that
//function you have passed that us know as call back function

