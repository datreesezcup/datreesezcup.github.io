var prefersDark;
var windowMediaDark;
var classToToggle = "light";

$(document).ready(function () {

    //region Handle Theme
    prefersDark = (localStorage.getItem("light") == "1");
    windowMediaTheme = window.matchMedia('(prefers-color-scheme: dark)').matches || true;

    if (windowMediaDark) {
        classToToggle = "dark";
        if(!prefersDark){
            toggleTheme(false);
        }
    }
    else{
        classToToggle = "light";
        if(prefersDark){
            toggleTheme(false);
            }
        }
    }
    //endregion
);

function toggleTheme(setVal=true){
    var addingClass = document.body.classList.toggle(classToToggle);
    if(setVal){
        var isLightNow = (!addingClass && classToToggle == "dark") || (addingClass && classToToggle == "light");
        console.log(classToToggle);
        console.log(isLightNow);
        localStorage.setItem("light", isLightNow ? "1" : "0");
    }
}