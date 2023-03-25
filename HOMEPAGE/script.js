const toggleBtn = document.getElementById("toggleBtn");
const icon = document.getElementById("icon_mode");
let logo = document.getElementById("logo");
let icon2 = document.getElementById("sm_mode");
let icon3 = document.getElementById("login-btn")
let icon4 = document.getElementById("search-btn")

toggleBtn.addEventListener("click", function () {
  if (icon.classList.contains("fa-moon")) {
    darkTheme(icon, logo);
  } else {
    lightTheme(icon, logo);
  }
});



function darkTheme(icon, logo) {
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
  logo.src = "justinmind_afb/D_Logo.png";
  document.body.classList.add("dark-mode");
  document.body.style.backgroundColor = "black";
  icon2.style.color = "white";
  icon3.style.color = "white";
  icon4.style.color = "white";
}

function lightTheme(icon, logo) {
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
  logo.src = "justinmind_afb/L_Logo.png";
  document.body.classList.remove("dark-mode");
  document.body.style.backgroundColor = "white";
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


