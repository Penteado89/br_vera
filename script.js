(function () {
  const btnEN = document.getElementById("btn-en");
  const btnPT = document.getElementById("btn-pt");
  const blocks = Array.from(document.querySelectorAll(".lang-block"));

  function setLang(lang) {
    blocks.forEach(b => {
      const isLang = b.getAttribute("data-lang") === lang;
      b.hidden = !isLang;
    });

    const isEN = lang === "en";
    btnEN.setAttribute("aria-pressed", String(isEN));
    btnPT.setAttribute("aria-pressed", String(!isEN));

    // Persist choice
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  // Default language: EN, unless saved preference exists
  let saved = "en";
  try {
    const v = localStorage.getItem("lang");
    if (v === "pt" || v === "en") saved = v;
  } catch (e) {}

  btnEN.addEventListener("click", () => setLang("en"));
  btnPT.addEventListener("click", () => setLang("pt"));

  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  setLang(saved);
})();
