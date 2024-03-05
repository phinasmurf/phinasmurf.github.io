// Functions for different texts in the button
let textlist = ["Dont click me ", "seriously", "That hurts!", "STOP IT!!", "Why are you doing this?",];

function buttonpressed(x) {
   let lastOutput = "";
   var thebutton = document.getElementById("clickmebtn");

   if (x !== lastOutput) {
      thebutton.innerHTML = textlist[Math.floor(Math.random(x) * textlist.length)];
      console.log(thebutton.innerHTML);
      lastOutput = x;
   } else{
      console.log("Duplicate");
   }


   var width = Math.random() * window.innerWidth;
   var length = Math.random() * window.innerlength;

   this.style.left = width + "px";
   this.style.top = length + "px";

} 


