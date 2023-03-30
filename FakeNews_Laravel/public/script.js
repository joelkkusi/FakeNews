const toggleBtn = document.getElementById("toggleBtn");
const icon = document.getElementById("icon_mode");
let logo = document.getElementById("logo");
let icon2 = document.getElementById("sm_mode");
let icon3 = document.getElementById("login-btn")
let icon4 = document.getElementById("search-btn")
let text = document.getElementsByClassName("textColor");
let container = document.getElementsByClassName("back-color");



toggleBtn.addEventListener("click", function () {
  if (icon.classList.contains("fa-moon")) {
    darkTheme(icon, logo, text, container);
  } else {
    lightTheme(icon, logo, text, container);
  }
});



function darkTheme(icon, logo, text, container) {
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
  logo.src = "/images/D_Logo.png";
  document.body.classList.add("dark-mode");
  document.body.style.backgroundColor = "#0a0b11";

  for (var i = 0; i < text.length; i++) {
    text[i].style.color = "white";
  }
  for (var i = 0; i < container.length; i++) {
    container[i].style.backgroundColor = "#232f571c";
  }
}

function lightTheme(icon, logo, text, container) {
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
  logo.src = "/images/L_Logo.png";
  document.body.classList.remove("dark-mode");
  document.body.style.backgroundColor = "white";

  for (var i = 0; i < text.length; i++) {
    text[i].style.color = "black";
  }
  for (var i = 0; i < container.length; i++) {
    container[i].style.backgroundColor = "#e5e7eb";
  }


}



$(document).ready(function () {
  $("#search-btn").click(function (event) {
    event.preventDefault(); // prevent the link from being followed
    $(".main-menu-3").toggleClass("open");
    $(".search-bar").toggle();
  });
});



const searchBtn = document.getElementById("search-btn");
const searchInput = document.querySelector(".search-bar input");

searchBtn.addEventListener("click", function () {
  const searchbar = document.querySelector(".search-bar");
  if (searchbar.classList.contains("active")) {
    searchbar.classList.remove("active");
  } else {
    searchbar.classList.add("active");
    searchInput.focus();
  }
});


