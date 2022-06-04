const navbar = document.getElementById("navbar");
const navitem = document.querySelectorAll(".header-features .nav .item");
const menuBtn = document.querySelector(".menu-btn");
const menuRes = document.getElementById("menu-responsive");

document.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navbar.style.boxShadow = "0 0 .625rem var(--black-color)";
  } else {
    navbar.style.boxShadow = "unset";
  }
});

navitem.forEach((item) => {
  item.addEventListener("click", () => {
    const curActive = document.getElementsByClassName("active");
    curActive[0].classList.remove("active");
    item.classList.add("active");
  });
});

menuBtn.addEventListener("click", () => {
  menuRes.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  console.log();
  if (
    menuRes.classList.contains("show") &&
    e.target.classList.value != "fa-solid fa-ellipsis"
  ) {
    menuRes.classList.remove("show");
  }
});
