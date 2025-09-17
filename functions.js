// a();
// // this is will give error
// b();

//function statement
function a(){
    console.log("a is calles")
}

//function expressiom

var b=function(){
    console.log("b is called");
}

a();
b();

//named function expression

var c=function xyz(){
    console.log("c is called");
}
c();

//first class function 

// the ability to use function as values is known as first class function

var q=function(param1){
    console.log(param1);
}

function xy(){
    console.log("heelo");
}

q(xy);

//output will be-> [Function: xy]

