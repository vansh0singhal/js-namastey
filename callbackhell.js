const cart=["shoes","pant","kurta"];


api.createOrder(cart,function (){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet();
            });
        });
    }
);

//call back hell
//code starts to grow horizontally instead of vertically
//one call backk inside another call back this keep goes on...
// this horizontal structure is also know as pyramid of doom


//second problem is inversion of control

//we are expecting that at some point of time create order function make api call to
//proceed to payment and it will run peacfully
//this how we loose control on our program


// so in previous function 
const order=["shoes","choco","tie"];

api.createOrder(order,function (){
    api.proceedToPayment();
});

//so here the main problem is we are totally realy on createorder function to execute our
//procedd to payment api ,here what we did is we have just pass the callback to
//the createorder function

//With promis;

const promise=createOrder(order);
//{data:undefined}
//after executing createorder function
//{data:orderId(for ex 343)};


promise.then(function(orderId){
    api.proceedToPayment(orderId);
});

//so now what we have did is like whenevr createOrder function execute and givethe 
//data to the promise so until the promise is empty is exmpty nothing is going to happen
//as soon as data comes from createOrder to promise than out promise instantly execute
//prmise gives us this guarentee it will call this callback function as soon as the prmise is filled with data
//in this case we have attached a callback to a promise


const GITHUB_URI="https://github.com/vansh0singhal"

const user=fetch(GITHUB_URI);

console.log(user);

//promise is a container for a future value

// a promis is an object representing the eventual completion of a async operation



//so the second problem of using older way of callbacks is horizontal growing of our code

//to solve that problem we use promise chaining

createOrder(order)
.then(function(){
    return proceedToPayment(orderId)
})
.then(function(){
    return showOrderSummary(paymentInfo)
})
.then(function(){
    return updateWallet(paymentInfo);
})