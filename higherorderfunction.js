function x(){
    console.log("x");
}
//a function which takes another function as a parametere is known as higher order function
function y(x){
    x();
}
y(x);


//FUNCTION PROGRAMING CONCEPT
const radius=[2,4,6,8];

// const calculateArea=function(radius){
//     const result=[];
//     for(let i=0;i<radius.length;i++){
//         result.push(Math.PI * radius[i]*radius[i]);
//     }
//     return result;
// }

// console.log(calculateArea(radius));


// const calculatecircumference=function(radius){
//     const result=[];
//     for(let i=0;i<radius.length;i++){
//         result.push(2*Math.PI * radius[i]);
//     }
//     return result;
// }

// console.log(calculatecircumference(radius));

//best practice to write code

//FUNCTIONAL PROGRAMMING

const area=function(radius){
    return  Math.PI * radius * radius;
}

const circumference=function(radius){
    return 2 * Math.PI * radius;
}

const calculate=function(radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}


console.log(calculate(radius,area));




