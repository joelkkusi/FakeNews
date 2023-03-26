const toggleBtn = document.getElementById("toggleBtn");
const icon = document.getElementById("icon_mode");
let logo = document.getElementById("logo");
let icon2 = document.getElementById("sm_mode");
let icon3 = document.getElementById("login-btn");
let icon4 = document.getElementById("search-btn");
let titel = document.getElementById("titel");
let titel2 = document.getElementById("titels2");
let titel3 = document.getElementById("titels3");
let titel4 = document.getElementById("titels4");
let searchh = document.getElementById("searchh");

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
  titel.style.color = "white";
  titel2.style.color = "white";
  titel3.style.color = "white";
  titel4.style.color = "white";
  searchh.style.color = "black";
}

function lightTheme(icon, logo) {
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
  logo.src = "justinmind_afb/L_Logo.png";
  document.body.classList.remove("dark-mode");
  document.body.style.backgroundColor = "white";
  titel.style.color = "black";
  titel2.style.color = "black";
  titel3.style.color = "black";
  titel4.style.color = "black";
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


