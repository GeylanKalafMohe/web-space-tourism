const hamburgerMenuElement = document.getElementById("hamburger-menu");
const mobileDrawerElement = document.getElementById("mobile-drawer");
const mobileDrawerCloseBtnElement = document.querySelector(
  "#mobile-drawer #close-btn svg"
);
const mainHeaderElement = document.getElementById("main-header");
const navListElement = document.querySelectorAll(
  "#main-header .nav-list, #mobile-drawer .nav-list"
);

hamburgerMenuElement.addEventListener("click", (_) => {
  mobileDrawerElement.style.display = "block";
});

mobileDrawerCloseBtnElement.addEventListener("click", (_) => {
  mobileDrawerElement.style.display = "none";
});

const selectedNavTabIndex = mainHeaderElement.dataset.tabindex;

function changeSelectedTab(index) {
  navListElement.forEach((navItem) => {
    console.log(navItem.children[index]);
    navItem.children[index].firstElementChild.classList.toggle("selected");
  });
}

changeSelectedTab(selectedNavTabIndex);

matchMedia("(min-width: 55rem)").addEventListener("change", () => {
  mobileDrawerElement.style.display = "";
});
