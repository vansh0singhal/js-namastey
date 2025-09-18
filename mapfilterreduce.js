const arr=[1,2,3,4,5];


function dou(x){
    return x*2;

}

const output=arr.map((x)=>x*2);


//filter is used ti filter out the values from thr array

// you can use the function in place of arrow function

const output1=arr.filter((x)=>{return x>4})


console.log(output);
console.log(output1);


//reduce

// it is used where you take all the values of the array and conver the result into 
//single element

const outpu3=arr.reduce(function(acc,curr){
    acc+=curr;
    return acc;
},0);
console.log(outpu3);

//reduce to find max element in the arr

const result=arr.reduce(function(acc,curr){
    if(curr>acc)
    acc=curr;

    return acc;

},0);

console.log(result);