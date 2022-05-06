

let nav_toggle = document.querySelector("#nav_toggle");
let nav = document.querySelector("#nav");


nav_toggle.addEventListener("click", function(event) {
  event.preventDefault();

  this.classList.toggle("active");
  nav.classList.toggle("active");

})