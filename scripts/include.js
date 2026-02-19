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
    fetch("footer/footer.html")
      .then((res) => res.text())
      .then((html) => {
        footer.innerHTML = html;
        const script = document.createElement("script");
        script.src = "../scripts/footer.js";
        document.body.appendChild(script);
      });
  }
});

