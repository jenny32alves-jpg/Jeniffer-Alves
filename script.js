/* =========================================================
   Jeniffer Alves — Portfólio
   JS mínimo: menu mobile, fechamento ao navegar, ano automático
   e pequena animação de revelação ao rolar a página.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- Menu mobile ---------- */
  var menuToggle = document.getElementById("menuToggle");
  var mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Fecha o menu ao clicar em um link (navegação suave em uma página só)
    mainNav.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Aviso visual caso a foto ainda não tenha sido adicionada ---------- */
  var heroPhoto = document.querySelector(".hero-photo");
  var heroFrame = document.querySelector(".hero-photo-frame");
  if (heroPhoto && heroFrame) {
    heroPhoto.addEventListener("error", function () {
      heroFrame.classList.add("hero-photo-frame--empty");
    });
  }

  /* ---------- Ano automático no rodapé ---------- */
  var anoAtual = document.getElementById("anoAtual");
  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }

  /* ---------- Revelação suave ao rolar a página ---------- */
  var revealTargets = document.querySelectorAll(
    ".card, .case-card, .section-heading, .flow-step, .tools-group"
  );

  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Sem suporte a IntersectionObserver: apenas mostra tudo
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
});
