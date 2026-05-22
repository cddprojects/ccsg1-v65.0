(function () {
  function closeNav(nav, btn) {
    if (!nav || !btn) return;
    nav.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }

  document.querySelectorAll(".nav-toggle").forEach(function (btn) {
    var id = btn.getAttribute("aria-controls");
    var nav = id ? document.getElementById(id) : null;
    if (!nav) return;

    btn.addEventListener("click", function () {
      var open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeNav(nav, btn);
      });
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    document.querySelectorAll(".nav-toggle").forEach(function (btn) {
      var nav = document.getElementById(btn.getAttribute("aria-controls"));
      closeNav(nav, btn);
    });
  });
})();
