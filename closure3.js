function a(){
    var d=10;
    function b(){
        var r=20;
        function c(){
            console.log(d,r);
        }
        c();
    }
    b();
}

a();