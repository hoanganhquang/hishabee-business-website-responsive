const navbar = document.getElementById("navbar");
const navitem = document.querySelectorAll(".header-features .nav .item");
const menuBtn = document.querySelector(".menu-btn");
const menuRes = document.getElementById("menu-responsive");
const sections = document.querySelectorAll("section");

document.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navbar.style.boxShadow = "0 0 .625rem var(--black-color)";
  } else {
    navbar.style.boxShadow = "unset";
  }
});

menuBtn.addEventListener("click", () => {
  menuRes.classList.add("show");
});

document.addEventListener("click", (e) => {
  if (!menuRes.contains(e.target) && !e.target.matches(".fa-ellipsis")) {
    menuRes.classList.remove("show");
  }
});

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionOffset = section.offsetTop;

    if (window.scrollY >= sectionOffset - 200) {
      currentSection = section.getAttribute("id");
    }
  });

  navitem.forEach((item) => {
    item.classList.remove("active");
    if (
      currentSection != null &&
      currentSection != "" &&
      item.children[0].getAttribute("href").includes(currentSection)
    ) {
      item.classList.add("active");
    }
  });
});
