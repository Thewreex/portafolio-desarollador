const boton = document.getElementById("botonModoNoche");

boton.addEventListener("click", () => {
  const html = document.documentElement;
  const temaActual = html.getAttribute("data-bs-theme");

  if (temaActual === "light") {
    document.documentElement.dataset.bsTheme = "dark";
  }
  else {
    document.documentElement.dataset.bsTheme = "light";
  }
});
