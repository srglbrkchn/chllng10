let status = "hidden";


function buttonActive() {
  document.querySelector(".hamburger").style.color = "rgba(250, 250, 250, .7)";
  document.querySelector(".menu-buttons").style.visibility = "visible";
  status = "appear";
}

function buttonInactive() {
  document.querySelector(".hamburger").style.color = "#fff";
  document.querySelector(".menu-buttons").style.visibility = "hidden";
  status = "hidden";
}

document.querySelector(".hamburger").addEventListener("click", function() {
  if(status === "hidden") {
    buttonActive();
  } else {
    buttonInactive();
  }
});

function buttonAppear() {
  let windowWidth = window.innerWidth;
  if(windowWidth > 1120) {
    document.querySelector(".menu-buttons").style.visibility = "visible";
  }else {
    document.querySelector(".menu-buttons").style.visibility = "hidden";
  }
}
