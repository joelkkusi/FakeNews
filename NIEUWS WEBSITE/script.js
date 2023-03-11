const toggleBtn = document.getElementById("toggleBtn");
const icon = document.getElementById("icon_mode");

icon.addEventListener("click", function() {
  if (icon.classList.contains("fa-sun")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon", "fa-sharp");
  } else {
    icon.classList.remove("fa-moon", "fa-sharp");
    icon.classList.add("fa-sun");
  }
});

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


