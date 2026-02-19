document.addEventListener("DOMContentLoaded", () => {
  // Inject header
  const header = document.getElementById("header");
  if (header) {
    fetch("/back_to_the_arcades/header/header.html")
      .then(res => res.text())
      .then(html => {
        header.innerHTML = html;
      });
  }

  // Inject footer
  const footer = document.getElementById("footer");
  if (footer) {
    fetch("/back_to_the_arcades/footer/footer.html")
      .then(res => res.text())
      .then(html => {
        footer.innerHTML = html;

        const script = document.createElement("script");
        script.src = "/back_to_the_arcades/scripts/footer.js?v=" + Date.now();
        document.body.appendChild(script);
      });
  }
});
