// Button click: add or remove the class "dark" on body.
// All the dark colours are in css/style.css (body.dark).
const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
