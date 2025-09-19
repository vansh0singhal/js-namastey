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




