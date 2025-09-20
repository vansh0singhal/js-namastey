const cart=["shoes","pants","jeans"];

createOrder()
.then(function(orderId){
    console.log(orderId);
    return orderId;   
})
.then(function(orderId){
    return proceedtopayemnt(orderId); 
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message);
})

// using catch we can handel the error if the promise is rejected 
//so now our own message will be printed

function proceedtopayemnt(orderId){
    const p=new Promise(function(resolve,reject){
        resolve("Payment succesfull");
    });
    return p;

}


function createOrder(cart){
    const pr=new Promise(function(resolve,reject){

        if(!isCartValid(cart)){
            const err=new Error("Cart is not valid");
            reject(err);
        }
        //logic to get access of orderId;
        const orderId="1234";

        if(orderId){
            setTimeout(()=>{
                resolve(orderId);

            },5000)
            
        }

    });

    return pr;
}

function isCartValid(){
    return true;
}

console.log("heelo");

