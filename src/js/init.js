function goToHomePage() {
  location.href = "home.html";
}

function logSubmit(event) {
  event.preventDefault();
  goToHomePage();
}

$(document).on("submit", "#loginForm", function (event) {
  event.preventDefault();
  goToHomePage();
});
