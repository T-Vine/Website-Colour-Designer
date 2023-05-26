
let y = 0;
function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

function randomText(color) {
    el = document.getElementById("p");
    number = Math.floor(Math.random()*4);
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
/* function select() {
    selector = document.getElementById("col").value;
    randomText(selector)
    console.log(selector);


} */

function revealTextButtons() {
    el = document.getElementsByTagName("span");
    el[0].classList.toggle("ceaseDisplay");
    // console.log("Running...")
}