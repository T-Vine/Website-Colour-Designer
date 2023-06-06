//variables
let y = 0;
let el;
let number; 
let search_Value;
let background_Value;

function darkMode() {
    let element = document.body;
    if (y === 0) {
        element.classList = ("dark-mode");
        y = 1;
    } else {
        element.classList = ("body");
        y = 0;
    }
    
}

function revealTextButtons() {
    el = document.getElementsByTagName("span");
    el[0].classList.toggle("ceaseDisplay");
    // console.log("Running...") for testing
}

function revealBackgroundButtons() {
    el = document.getElementsByClassName("normal-background");
    el[0].classList.toggle("ceaseDisplay");
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

document.getElementById("search-text").addEventListener("keypress", text_search);
function text_search(event) {
    if (event.key === "Enter") {
        console.log("Entry"); //notifies if entry submitted (testing)
        search_Value = document.getElementById("search-text").value;
        randomText(search_Value.toLowerCase());
    }
}

document.getElementById("search-background").addEventListener("keypress", background_search);
function background_search(event) {
    if (event.key === "Enter") {
        console.log("Entry"); //notifies if entry submitted (testing)
        background_Value = document.getElementById("search-background").value;
        backgroundColour(background_Value.toLowerCase());
    }
}