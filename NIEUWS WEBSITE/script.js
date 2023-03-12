const toggleBtn = document.getElementById("toggleBtn");
const icon = document.getElementById("icon_mode");
let logo = document.getElementById("logo");

toggleBtn.addEventListener("click", function() {
  if (icon.classList.contains("fa-sun")) {
    darkTheme(icon, logo);
  } else {
    lightTheme(icon, logo);
  }
});


function darkTheme(icon, logo) {
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon", "fa-sharp");
  document.body.style.backgroundColor = "white";
  logo.src = "justinmind_afb/L_Logo.png";
  //in deze functie zet je de code om het dark theme te maken, light theme in de onderste functie.
  //probeer de text en logo kleuren wit/leesbaar te maken, want mij lukt het niet en ik ga slapen doei.
}

function lightTheme(icon, logo) {
  icon.classList.remove("fa-moon", "fa-sharp");
  icon.classList.add("fa-sun");
  document.body.style.backgroundColor = "black";
  logo.src = "justinmind_afb/D_Logo.png";
  //hier hetzelfde maar voor light theme. Stay hydrated my boys.
}


$(document).ready(function() {
  $("#search-btn").click(function(event) {
    event.preventDefault(); // prevent the link from being followed
    $(".main-menu-3").toggleClass("open");
    $(".search-bar").toggle();
  });
});



const searchBtn = document.getElementById("search-btn");
const searchInput = document.querySelector(".search-bar input");

searchBtn.addEventListener("click", function() {
  const searchbar = document.querySelector(".search-bar");
  if (searchbar.classList.contains("active")) {
    searchbar.classList.remove("active");
  } else {
    searchbar.classList.add("active");
    searchInput.focus();
  }
});


