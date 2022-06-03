const navbar = document.getElementById("navbar");
const navitem = document.querySelectorAll(".header-features .nav .item");

const checkScroll = () => {
  document.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      navbar.style.boxShadow = "0 0 .625rem var(--black-color)";
    } else {
      navbar.style.boxShadow = "unset";
    }
  });
};

const checkActive = () => {
  navitem.forEach((item) => {
    item.addEventListener("click", () => {
      const curActive = document.getElementsByClassName("active");
      curActive[0].classList.remove("active");
      item.classList.add("active");
    });
  });
};

checkScroll();
checkActive();
