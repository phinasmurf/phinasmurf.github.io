function buttonpressed() {
   
} 


// Functions for different texts in the button
let textlist = ["Dont click me ", "seriously", "That hurts!", "STOP IT!!", "Why are you doing this?",];

function buttonpressed() {
   var thebutton = document.getElementById("clickmebtn");
   thebutton.innerHTML = textlist[Math.floor(Math.random() * textlist.length)];
   console.log(thebutton.innerHTML);

   var width = Math.random() * window.innerWidth;
   var length = Math.random() * window.innerlength;

   this.style.left = width + "px";
   this.style.top = length + "px";

} 


// Path: HTML-kursus/click%20me/ClickMe.js

