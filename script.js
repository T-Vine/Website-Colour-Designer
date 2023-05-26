
let y = 0;
function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

function revealTextButtons() {
    el = document.getElementsByTagName("span");
    el[0].classList.toggle("ceaseDisplay");
    // console.log("Running...")
}

function randomText(color) {
    el = document.getElementById("p");
    number = Math.floor(Math.random()*4); //for future functionality
    //console.log(number); for testing
    switch (color) {
        
        case "red":
            el.style.color = "red";
            break;
        case "green":
            el.style.color = "green";
            break;
        case "yellow":
            el.style.color = "yellow";
            break;  
        case "orange":
            el.style.color = "orange";
            break;
        case "blue":
            el.style.color = "blue";
            break;      
    }
}

function backgroundColour(color) {
    el = document.body;
    switch (color) {
        case "red":
            el.classList.toggle("red-background");
            break;
        case "green":
            el.classList.toggle("green-background");
            break;
        case "yellow":
            el.classList.toggle("yellow-background");
            break;  
        case "orange":
            el.classList.toggle("orange-background");
            break;
        case "blue":
            el.classList.toggle("blue-background");
            break;
    }
    el.classList.toggle("red-colour");
}
/* function select() {
    selector = document.getElementById("col").value;
    randomText(selector)
    console.log(selector);


} */

