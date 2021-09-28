// var myBtn1 = document.getElementById("btn1");
// var myBtn2 = document.getElementById("btn2");
var changeHeadline = document.getElementsByTagName("h3")[0];
const toggleBtn = document.getElementById('toggle');
let lightState = 'off';

//Function for light on and light off.
    
function turnOn(){
    let lights = document.getElementsByClassName("light");;
    for (let i = 0; i < 3; i++) {
        lights[i].src = "images/lightOff.jpg";    
    }
    changeHeadline.innerHTML = "On the light";
    changeHeadline.setAttribute("style","color:blue");
    toggleBtn.innerHTML = "On";
}

function turnOff() {
    let lights = document.getElementsByClassName("light");;
    for (let i = 0; i < 3; i++) {
        lights[i].src = "images/lightOn.jpg";    
    }
    changeHeadline.innerHTML = "Off the light";
    changeHeadline.setAttribute("style","color:red");
    toggleBtn.innerHTML = "Off";
}

// myBtn1.addEventListener("click",turnOn);
// myBtn2.addEventListener("click",turnOff);

//use logical operator for using one button.
function toggleLight() {        
     if(lightState === 'on') {
        lightState = 'off';
        turnOff()
    } else {
        lightState = 'on';
        turnOn()
    }
}

//toggleBtn.addEventListener("click", toggleLight);

toggleBtn.addEventListener("click", function (){
    try {
        toggleLight();
    } catch (error) {
       alert("There is en error") 
    }
});