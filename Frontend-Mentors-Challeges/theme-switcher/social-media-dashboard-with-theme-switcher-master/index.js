//get the elements

feather.replace();

// const inputBtn = document.getElementById("input-btn");
// const lightMode = document.getElementById("light");
// const darkMode = document.getElementById("default");
// const icon = document.getElementById("icon");

// document.querySelector(".theme").addEventListener("click", () => {
//   document.querySelector("body").classList.toggle("light_theme");
//   // document.querySelector("body").classList.toggle("card");
// });

// function toggleRootClass() {
//   document.querySelector("body").classList.toggle("darkmode");
// }
// document.querySelector(".theme-icon").addEventListener("click", () => {
//   toggleRootClass();
// });

const changeTheme = document.getElementById("checkbox");
changeTheme.addEventListener("click", switchMode);

// function that checks for which condition is met

function switchMode() {
  console.log("going to light mode");
  if (changeTheme.checked) {
    lightMode();
  } else {
    console.log("switching back to darkmode");
    darkMode();
  }
}

//function that switches between modes
//darkmodeon

function lightMode() {
  document.body.classList.add("light-theme");
}

//lightmodeon

function darkMode() {
  document.body.classList.remove("light-theme");
}
