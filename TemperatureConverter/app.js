
const textBox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("tofahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

const btn = document.getElementById("submitbtn");

let temp;

btn.addEventListener('click', function(){
    if(toFahrenheit.checked){

        temp = Number(textBox.value);
        temp = temp * 9/5 + 32;
        result.innerHTML = temp.toFixed(2) + "°F";

    }

    else if(toCelcius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.innerHTML = temp.toFixed(2) + "°C";
    }

    else{
        result.innerHTML = "SELECT A UNIT!"
    }
})
