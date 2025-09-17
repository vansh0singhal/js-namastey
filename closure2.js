
function q(){
    var p=10;
    function w(){
        console.log(p);
    }
    p=100;
    return w;
}

var r=q();

r();