const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile");

burger.addEventListener("click", () => {
  if (menu.classList.contains("disabled")) {
    menu.classList.remove("disabled");
  } else {
    menu.classList.add("disabled");
  }
});
