var value = document.getElementById("A-result");

// Celsius to Fahrenheit

function fn1(){
    var celsius = prompt("Enter the value for Celsius");
    var fahrenheit  = ( 9 / 5 ) * celsius + 32;
    value.innerHTML = fahrenheit ;
    document.getElementById("congrat").innerHTML = "Congratulation!!" + " " + "You have successfully Calculate Celsius .";
}
fn1();

function fn2(){
    document.getElementById("A-result").innerHTML = "";
    document.getElementById("congrat").innerHTML = "";
    // document.getElementById("result").style.width = "20%";
    // document.getElementById("result").style.height = "9%";
}

function fn3(){
    fn1();
}
