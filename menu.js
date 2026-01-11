window.addEventListener("scroll", function () {
  const header = document.querySelector(".header_section");
  const logoImg = document.getElementById("logo-img");

  // Caminhos das logos
  const logoTopo = "images/logo.webp";     // logo padrão
  const logoScroll = "images/logo1.webp";  // logo ao rolar

  if (window.scrollY > 10) {
    header.classList.add("scrolled");
    logoImg.src = logoScroll;
  } else {
    header.classList.remove("scrolled");
    logoImg.src = logoTopo;
  }
});

