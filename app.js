let displayDate = document.getElementById("date");
let date = new Date().getFullYear();
displayDate.innerHTML = `Copyright © ${date}`;

for (let i = 0; i < document.querySelectorAll(".key").length; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
      let key1 = new Audio("sounds/G-sharp.mp3");
      key1.play();
      break;

    case "s":
      let key2 = new Audio("sounds/A.mp3");
      key2.play();
      break;

    case "d":
      let key3 = new Audio("sounds/B.mp3");
      key3.play();
      break;

    case "f":
      let key4 = new Audio("sounds/C.mp3");
      key4.play();
      break;

    case "j":
      let key5 = new Audio("sounds/D.mp3");
      key5.play();
      break;

    case "k":
      let key6 = new Audio("sounds/E.mp3");
      key6.play();
      break;

    case "l":
      let key7 = new Audio("sounds/F.mp3");
      key7.play();
      break;

    case ";":
      let key8 = new Audio("sounds/G.mp3");
      key8.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  if (currentKey === ";") {
    currentKey = "semi-column";
  }
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.remove("pressed");

  setTimeout(function () {
    activeButton.classList.add("pressed");
  }, 150);
}
