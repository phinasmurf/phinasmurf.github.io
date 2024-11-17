// Functions for different texts in the button
let textlist = ["Dont click me ", "seriously", "That hurts!", "STOP IT!!", "Why are you doing this?",];

let lastOutput = "";


function buttonpressed(x)
{
   var thebutton = document.getElementById("clickmebtn");

   let lastOutput = "";
   let newOutput = "";

   let textlist = [
      "Dont click me", 
      "seriously", 
      "That hurts!", 
      "STOP IT!!", 
      "Why are you doing this?",
      "Now you're just mean"];

      document.getElementById("myButton").addEventListener("click", function()){
         var x = Math.random() * window.innerWidth;
         var y = Math.random() * window.innerHeight;
         this.style.position = "absolute";
         this.style.left = x + 'px';
         this.style.top = y + 'px';

   if (x !== lastOutput) {
      thebutton.innerHTML = textlist[Math.floor(Math.random(x) * textlist.length)];
      console.log(thebutton.innerHTML);
      lastOutput = x;
   } else{
      console.log("Duplicate");
   }
}

 /* function buttonmove(){
   var thebutton = document.getElementById("clickmebtn");
   var width = Math.random() * window.innerWidth;
   var length = Math.random() * window.innerHeight;

   thebutton.style.left = width + "px";
   thebutton.style.top = length + "px";
}  */

   /* Randomize postion of the button
   var width = Math.random() * window.innerWidth;
   var length = Math.random() * window.innerHeight;

   this.style.left = width + "px";
   this.style.top = length + "px";
 */

