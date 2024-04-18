document.addEventListener("DOMContentLoaded", function () {
  let sunIcon = document.getElementById("sun-icon");
  let moonIcon = document.getElementById("moon-icon");
  let themeToggle = document.getElementById("theme-toggle");

  // On page load or when changing themes
  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }

  // Toggle the icon and theme on click
  themeToggle.addEventListener("click", function () {
    if (sunIcon.classList.contains("hidden")) {
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  });
});

// feedback
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form");
  const feedbackThanks = document.getElementById("feedbackThanks");
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");

  let submitted = false;

  function onSubmit(event) {
    event.preventDefault();
    const response = event.target.dataset.response;
    if (response === "yes" || response === "no") {
      submitted = true;
      form.classList.add("hidden");
      feedbackThanks.classList.remove("hidden");
    }
  }

  yesButton.addEventListener("click", onSubmit);
  noButton.addEventListener("click", onSubmit);
});