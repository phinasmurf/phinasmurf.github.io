/*If yes button is pressed
function pressYes(){
    if (5 == 5) {
        alert("Good choice >:)")
    }

    else{
        alert("Awh..")
    }
}

//If no button is pressed
function pressNo(){
    if (5 == 5) {
        alert("Wrong choice.. ")
    }

    else{
        alert("Awh..")
    }
}  */

const yesbtn = document.getElementById("yes-button")

function pressedNo(){
    var currentHeight = yesbtn.offsetHeight;
    var currentWidth = yesbtn.offsetWidth;

    yesbtn.style.height = (currentHeight + 20) + 'px';
    yesbtn.style.width = (currentWidth + 20) + 'px';
    yesbtn.style.fontSize = (parseInt(window.getComputedStyle(yesbtn).fontSize) + 12) + 'px';
}


function pressedYes(){
    window.location.href = "/HTML-kursus/Valentines-projekt/PressedYesPage.html"
}