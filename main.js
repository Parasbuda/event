const btn = document.querySelector(".mobile-btn");
const navList = document.querySelector(".nav-list");

btn.addEventListener("click", () => {
  navList.classList.toggle("mobile-view");
});
