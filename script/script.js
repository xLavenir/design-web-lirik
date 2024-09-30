let overlay = document.querySelector(".menu-overlay .menu-container");
let buton = document.getElementById("menu-btn");
let close = document.querySelector(
  ".menu-overlay .menu-container .menu-item .close"
);
let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("box-container");
let closeSearch = document.getElementById("close-search");

buton.addEventListener("click", function () {
  overlay.computedStyleMap().get("top").value === "-100%";
  overlay.style.top = "8rem";
});

close.addEventListener("click", function () {
  overlay.style.top = "-100%";
});

function buttonSearch() {
  if (window.innerWidth < 1127) {
    searchButton.addEventListener("click", function () {
      searchInput.computedStyleMap().get("display").value === "none";
      searchInput.style.display = "flex";
    });
  }
  if (
    searchInput.computedStyleMap().get("display").value === "none" &&
    window.innerWidth < 1127
  ) {
    closeSearch.addEventListener("click", function () {
      searchInput.style.display = "none";
    });
  }
}
buttonSearch();
