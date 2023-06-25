// Variables.


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
    // Console.log("Running...") for testing.
}

function revealBackgroundButtons() {
    el = document.getElementsByClassName("normal-background");
    el[0].classList.toggle("ceaseDisplay");
}

function changeText(colour) {
    //console.log(colour);
    el = document.querySelector("p");
    number = Math.floor(Math.random()*4); // For future functionality.
    // Console.log(number); for testing.
    switch (colour) { // Switch statement is effectively pointless due to the default. However it is useful for debugging.  
        
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
        default:
            el.style.color = colour;
    }
}

function backgroundColour(colour) {
    el = document.body;
    switch (colour) {
        case "red":
            el.style.background = ("red");
            break;
        case "green":
            el.style.background = ("green");
            break;
        case "yellow":
            el.style.background = ("yellow");
            break;  
        case "orange":
            el.style.background = ("orange");
            break;
        case "blue":
            el.style.background = ("blue");
            break;
        default:
            el.style.background = colour;
            //el.style.backgroundColor = colour+" !important";
    }
    //el.classList.toggle("red-colour");
}
/* function select() {
    selector = document.getElementById("col").value;
    randomText(selector)
    console.log(selector);


} */
function gradientLeft(place) {
    if (place === "body") {
        el = document.body;
        values = document.querySelector("#linear-gradient-left").value;
        colours = values.split(",");
        console.log(colours[0], colours[1]);
        //document.body.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) ";
        el.style.background = "linear-gradient(90deg, "+colours[0]+" 0%, "+colours[1]+")";
    }
    else {
        //deprecated
        el = document.querySelector("p");
        values = document.querySelector("#linear-gradient-left-text").value;
        colours = values.split(",");
        console.log(colours[0], colours[1]);
        //document.body.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) ";
        el.style.background = "-webkit-linear-gradient(90deg, "+colours[0]+" 0%, "+colours[1]+")";
        el.style.maxWidth = "max-content";
        el.style.backgroundClip = "text";
        el.style.webkitTextFillColor = "transparent";
        //el.setAttribute("style", "background: linear-gradient(90deg, "+colours[0]+" 0%, "+colours[1]+")")
    }
}
// Radial-gradient
function radialGradient(colours) {
    colours = values.split(",");
    console.log(colours);
    el = document.body; 
    //document.body.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) ";
    el.style.background = "radial-gradient("+colours[0]+","+colours[1]+")";
}
function devRadialGradient(input) {
    inputs = input.split(",");
    el = document.body;
    if (inputs.length == 2) {
        inputs = inputs;
        el.style.background = "radial-gradient("+inputs[0]+","+inputs[1]+")";
    } else {
        inputs = input;
        el.style.background = "radial-gradient("+inputs+")";
    }
    console.log(inputs);
    
    console.log("radial-gradient("+inputs[0]+","+inputs[1]+")");
}
function devLinearGradient(input) {
    inputs = input.split(",");
    el = document.body;
    if (inputs.length == 2) {
        inputs = inputs;
        el.style.background = "linear-gradient("+inputs[0]+","+inputs[1]+")";
    } else {
        inputs = input;
        el.style.background = "linear-gradient("+inputs+")";
    }
    console.log(inputs);
    
    console.log("linear-gradient("+inputs[0]+","+inputs[1]+")");
}

document.querySelector("#search-text").addEventListener("keypress", text_search);
function text_search(event) {
    if (event.key === "Enter") {
        console.log("Entry"); //notifies if entry submitted (testing)
        search_Value = document.getElementById("search-text").value;
        changeText(search_Value.toLowerCase());
    }
}

document.querySelector("#search-background").addEventListener("keypress", background_search);
function background_search(event) {
    if (event.key === "Enter") {
        console.log("Entry"); // Notifies if entry submitted (testing).
        background_Value = document.getElementById("search-background").value;
        backgroundColour(background_Value.toLowerCase());
    }
}
document.querySelector("#linear-gradient-left").addEventListener("keypress", linear_gradient_left_search);
function linear_gradient_left_search(event) {
    if (event.key === "Enter") {
        console.log("Entry for Gradient"); // Notifies if entry submitted (testing).
        gradientLeft("body");
    }
}
document.querySelector("#radial-gradient").addEventListener("keypress", radial_gradient_search);
function radial_gradient_search(event) {
    if (event.key === "Enter") {
        console.log("Entry for Gradient"); // Notifies if entry submitted (testing).
        values = document.querySelector("#radial-gradient").value;
        radialGradient(values);
    }
}
// Getting values for and adding event listeners for developer searches.
document.querySelector("#dev-radial-gradient").addEventListener("keypress", dev_radial_gradient_search);
function dev_radial_gradient_search(event) {
    if (event.key === "Enter") {
        console.log("Entry for Dev-Gradient"); // Notifies if entry submitted (testing).
        values = document.querySelector("#dev-radial-gradient").value;
        devRadialGradient(values);
    }
}
document.querySelector("#dev-linear-gradient").addEventListener("keypress", dev_linear_gradient_search);
function dev_linear_gradient_search(event) {
    if (event.key === "Enter") {
        console.log("Entry for Dev-Gradient"); // Notifies if entry submitted (testing)
        values = document.querySelector("#dev-linear-gradient").value;
        devLinearGradient(values);
    }
}
/* document.querySelector("#linear-gradient-left-text").addEventListener("keypress", linear_gradient_left_search_text);
function linear_gradient_left_search_text(event) {
    if (event.key === "Enter") {
        console.log("Entry for Gradient"); //notifies if entry submitted (testing)
        gradientLeft("paragraph");
    }
} */ //This has been discontinued due to incorrect functionality