function toggleDarkMode(){
    let bodyElement = document.getElementById("main-background"); //target the body element
    let darkModeButtonElement = document.getElementById("dark-mode-btn"); //target the dark mode button

    //if its in dark mode, change it to light mode
    //if background is black, change to original color
    if (bodyElement.style.background === "black"){
        bodyElement.style.background = "#0B3D91";
        darkModeButtonElement.innerHTML = "Change to Dark Mode"
    }
    //if its in light mode, change it to dark mode
    else{
        bodyElement.style.background = "black";
        darkModeButtonElement.innerHTML = "Change to Light Mode"
        //set background to black
    }
}