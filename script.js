
let y = 0;
function darkMode() {
    let element = document.body;
    
    element.classList = ("dark-mode");
}

function revealTextButtons() {
    let el = document.getElementsByTagName("span");
    el[0].classList.toggle("ceaseDisplay");
    // console.log("Running...") for testing
}

function revealBackgroundButtons() {
    let el = document.getElementsByClassName("normal-background");
    el[0].classList.toggle("ceaseDisplay");
}

function randomText(color) {
    let el = document.getElementById("p");
    let number = Math.floor(Math.random()*4); //for future functionality
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
    let el = document.body;
    switch (color) {
        case "red":
            el.classList = ("red-background");
            break;
        case "green":
            el.classList = ("green-background");
            break;
        case "yellow":
            el.classList = ("yellow-background");
            break;  
        case "orange":
            el.classList = ("orange-background");
            break;
        case "blue":
            el.classList = ("blue-background");
            break;
    }
    //el.classList.toggle("red-colour");
}
/* function select() {
    selector = document.getElementById("col").value;
    randomText(selector)
    console.log(selector);


} */

