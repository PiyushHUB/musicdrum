var x = document.querySelectorAll(".drum");
var buttonLength = x.length;
for (var i = 0; i < buttonLength; i++) {
  x[i].addEventListener("click", clickFunction);
}
document.addEventListener("keypress", clickFunction);

//Angela did it by making seaprate function and passing arg there as
// buttonresponase and keyResponse.And used button animation there.
//So u can use that logic also.

function clickFunction(event) {
  // var audio=new Audio("sounds/tom-1.mp3");
  // audio.play();
  var butonResponse = this.innerHTML;


  var keyResponse = event.key;
  if (butonResponse !== undefined) {
    buttonAnimation(butonResponse);
  }
  if (keyResponse !== undefined) {
    buttonAnimation(keyResponse);
  }
  switch (butonResponse || keyResponse) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

  }
  function buttonAnimation(response) {
    try{
    document.querySelector("." + response).classList.add("pressed");
    setTimeout(function() {
      document.querySelector("." + response).classList.remove("pressed");
    }, 100);
  }
  catch(err){
    console.log("wrong button");
  }
  }

}
