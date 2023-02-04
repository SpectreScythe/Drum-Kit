// Calculating number of buttons

var numberOfBeats = document.querySelectorAll(".noteKey").length;

// Main function

for (var i = 0; i < numberOfBeats; i++) {

  document.querySelectorAll(".noteKey")[i].addEventListener("click", function() {
    var keyPressed = this.innerHTML;

    callSound(keyPressed);
    animateKey(keyPressed);
  });

}

// Playing via keyboard keyPressed

document.addEventListener("keydown" , function(event){
  callSound(event.key);
  animateKey(event.key);
});

// Playing the correspoding mp3 file

function callSound(key) {

  switch (key) {

    case "w":
      var tomOne = new Audio("sounds/tom-1.mp3");
      tomOne.play();
      break;

    case "a":
      var tomTwo = new Audio("sounds/tom-2.mp3");
      tomTwo.play();
      break;

    case "s":
      var tomThree = new Audio('sounds/tom-3.mp3');
      tomThree.play();
      break;

    case "d":
      var tomFour = new Audio('sounds/tom-4.mp3');
      tomFour.play();
      break;

    case "j":
      var snaremp3 = new Audio('sounds/snare.mp3');
      snaremp3.play();
      break;

    case "k":
      var crashmp3 = new Audio('sounds/crash.mp3');
      crashmp3.play();
      break;

    case "l":
      var kickmp3 = new Audio('sounds/kick-bass.mp3');
      kickmp3.play();
      break;

    default:
      console.log(key);

  }
}

// Animation Function

function animateKey(latestInput) {

  var activeKey = document.querySelector("." + latestInput);
  activeKey.classList.add("pressed");

  setTimeout (function () {
    activeKey.classList.remove("pressed");
  } , 100);

}
