const menuBtn = document.querySelector(".menu-btn");
const sideBar = document.querySelector(".sidebar");

let showMenu = false;
menuBtn.addEventListener("click", () => {
  if (showMenu) {
    menuBtn.innerHTML = "Expand";
    showMenu = false;
  } else {
    menuBtn.innerHTML = "Hide";
    showMenu = true;
  }
  sideBar.classList.toggle("show");
});
