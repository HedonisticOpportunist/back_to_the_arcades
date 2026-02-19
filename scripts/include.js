document.addEventListener("DOMContentLoaded", () => {
  // Inject header
  const header = document.getElementById("header");
  if (header) {
    fetch("../header/header.html")
      .then((res) => res.text())
      .then((html) => {
        header.innerHTML = html;
      });
  }

  // Inject footer
  const footer = document.getElementById("footer");
  if (footer) {
    fetch("../footer/footer.html")
      .then((res) => res.text())
      .then((html) => {
        footer.innerHTML = html;

        // Load footer.js AFTER footer HTML is in the DOM
        const script = document.createElement("script");
        script.src = "../scripts/footer.js?v=" + Date.now();
        document.body.appendChild(script);
      });
  }
});
