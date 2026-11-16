const themeBtn = document.getElementById("theme-btn");
const nameInput = document.getElementById("name");
const hello = document.getElementById("hello");
const form = document.querySelector("form");

// Click: add or remove the class "dark" on body
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// Say hello with the name the visitor types
nameInput.addEventListener("input", function () {
  if (nameInput.value.trim() === "") {
    hello.textContent = "";
  } else {
    hello.textContent = "Hello, " + nameInput.value.trim() + "!";
  }
});

// Keep the form on the page
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

// Skill rings: add the class "bounce" when a ring is clicked
const ringItems = document.querySelectorAll(".ring-item");

ringItems.forEach(function (item) {
  item.addEventListener("click", function () {
    const ring = item.querySelector(".ring");
    ring.classList.remove("bounce");
    void ring.offsetWidth; // restart the animation
    ring.classList.add("bounce");
  });
});

// Star rating: stars up to the clicked one get the class "active"
const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("rating-text");

stars.forEach(function (star) {
  star.addEventListener("click", function () {
    const value = Number(star.dataset.value);

    stars.forEach(function (s) {
      if (Number(s.dataset.value) <= value) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });

    ratingText.textContent = "You rated this page " + value + " out of 5. Thank you!";
  });
});

// A small star pops up where the visitor clicks
document.addEventListener("click", function (event) {
  const pop = document.createElement("span");
  pop.className = "pop-star";
  pop.textContent = "\u2605";
  pop.style.left = event.clientX + "px";
  pop.style.top = event.clientY + "px";
  document.body.appendChild(pop);

  pop.addEventListener("animationend", function () {
    pop.remove();
  });
});
