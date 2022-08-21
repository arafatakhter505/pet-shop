const menuBar = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");

menuBar.addEventListener("click", function () {
  menu.classList.add("active-menu");
});
closeBtn.addEventListener("click", function () {
  menu.classList.remove("active-menu");
});
