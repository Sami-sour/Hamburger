const button = document.querySelector("#icon");
const links = document.querySelector(".links");
const closeMenu = document.querySelector(".cross-icon");

button.addEventListener("click", () => {
  links.classList.add("open-links");
  button.style.display = "none";
  closeMenu.style.display = "inline-block";
  closeMenu.style.position = "relative";
  closeMenu.style.top = "-24px";
});

closeMenu.addEventListener("click", () => {
  button.style.display = "block";
  closeMenu.style.display = "none";
  links.classList.remove("open-links");
});
