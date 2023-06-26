var feet = document.getElementById('feet');
var inches = document.getElementById('inches');

feet.addEventListener('input', function() {

let f=feet.value;
let i=f*12;
inches.value=i;


});

inches.addEventListener('input', function() {

let i=inches.value;
let f=i/12;
feet.value=f;

if(!Number.isInteger(f)){
    feet.value=f.toFixed(2);
};



});