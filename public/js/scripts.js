const LS = localStorage;
const d = document;

// DARKMODE HANDLER
LS.getItem("DarkModePortfolioRami") && LS.removeItem("DarkModePortfolioRami");
const linksNavBar = d.querySelectorAll(".link-navbar-fixed"),
  contenedorNavbarSM = d.querySelector(".contenedor-navbar"),
  menuDesplegable = d.querySelector(".nav-bar-oculto"),
  logoNavbarSM = d.querySelector(".logo-navbar"),
  body = d.getElementsByTagName("body"),
  fotoPerfil = d.querySelector(".contenedor-foto-perfil"),
  logoNavBar = d.querySelector(".imgLogoNavbar"),
  backgroundHover = d.querySelectorAll(".backgroundHover"),
  marker = d.querySelectorAll(".marker"),
  aboutMe = d.querySelector(".contenedor-about-me"),
  skillsContainer = d.querySelector(".contenedor-general-skills"),
  langsContainer = d.querySelector(".contenedor-langs"),
  todosLosP = d.querySelectorAll("p"),
  todosLosH2 = d.querySelectorAll("h2"),
  todosLosH3 = d.querySelectorAll("h3"),
  todosLosH4 = d.querySelectorAll("h4"),
  todosLosH5 = d.querySelectorAll("h5"),
  todosLosH6 = d.querySelectorAll("h6"),
  itemTrabajo = d.querySelectorAll(".item-trabajo"),
  detalleTrabajo = d.querySelectorAll(".contenedor-flex-detalles-trabajos"),
  contenedorX = d.querySelectorAll(".contenedor-x"),
  lineaDivisora1 = d.querySelectorAll(".linea-divisora"),
  sectionContacto = d.querySelector(".contacto"),
  labels = d.querySelectorAll("label"),
  btnEnviarCorreo = d.querySelector("#btn-enviar"),
  logoFacebook = d.querySelector(".logo-facebook"),
  logoGithub = d.querySelector(".logo-github"),
  logoLinkedin = d.querySelector(".logo-linkedin"),
  logoInstagram = d.querySelector(".logo-instagram"),
  logoRP = d.querySelector(".logo-rp-rrss"),
  logoSitioWeb = d.querySelectorAll(".iconoSitioWeb"),
  logoVerDetalles = d.querySelectorAll(".ver-detalles"),
  docs = d.querySelector(".docs"),
  btnDownloadLg = d.querySelector(".btn-descargar-cv"),
  btnDownloadSm = d.querySelector(".btn-navbar-sm");

if (d.getElementById("toggle-dark-mode")) {
  const btnDarkMode = d.getElementById("toggle-dark-mode");

  const lightMode = () => {
    btnDarkMode.checked = false;
    body[0].classList.remove("bodyDark");
    contenedorNavbarSM.classList.remove("navbarSMDark");
    logoNavbarSM.classList.remove("imgLogoNavbarDark");
    menuDesplegable.classList.remove("BGElementDarkParaNavbar");
    fotoPerfil.classList.remove("fotoPerfilDark");
    linksNavBar.forEach((link) => link.classList.remove("fontDark"));
    logoNavBar.classList.remove("imgLogoNavbarDark");
    backgroundHover.forEach((item) =>
      item.classList.remove("backgroundHoverDark")
    );
    marker.forEach((mark) => mark.classList.remove("markerDark"));
    aboutMe.classList.remove("fontDark");
    skillsContainer.classList.remove("BGElementDark");
    langsContainer.classList.remove("BGElementDark");
    todosLosP.forEach((p) => p.classList.remove("fontDark"));
    todosLosH2.forEach((h) => h.classList.remove("fontDark"));
    todosLosH3.forEach((h) => h.classList.remove("fontDark"));
    todosLosH4.forEach((h) => h.classList.remove("fontDark"));
    todosLosH5.forEach((h) => h.classList.remove("fontDark"));
    todosLosH6.forEach((h) => h.classList.remove("fontDark"));
    itemTrabajo.forEach((card) => card.classList.remove("cardDark"));
    detalleTrabajo.forEach((det) => det.classList.remove("itemDetalleDark"));
    contenedorX.forEach((x) => x.classList.remove("xDark"));
    lineaDivisora1.forEach((linea) => linea.classList.remove("lineaDark"));
    sectionContacto.classList.remove("cardDarkContacto");
    labels.forEach((lab) => lab.classList.remove("fontDark"));
    btnEnviarCorreo.classList.remove("btnEnviarDark");
    logoFacebook.classList.remove("logoFacebookDark");
    logoGithub.classList.remove("logoGithubDark");
    logoLinkedin.classList.remove("logoLinkedinDark");
    logoInstagram.classList.remove("logoInstagramDark");
    logoRP.classList.remove("logoRPDark");
    logoSitioWeb.forEach((logo) => logo.classList.remove("iconoSitioWebDark"));
    logoVerDetalles.forEach((logo) =>
      logo.classList.remove("ver-detalles-dark")
    );
    btnDownloadLg.classList.remove("btn-descargar-cv-dark");
    btnDownloadSm.classList.remove("btn-navbar-sm-dark");

    LS.setItem("theme", "light");
  };

  const darkMode = () => {
    btnDarkMode.checked = true;
    body[0].classList.add("bodyDark");
    contenedorNavbarSM.classList.add("navbarSMDark");
    logoNavbarSM.classList.add("imgLogoNavbarDark");
    menuDesplegable.classList.add("BGElementDarkParaNavbar");
    fotoPerfil.classList.add("fotoPerfilDark");
    linksNavBar.forEach((link) => link.classList.add("fontDark"));
    logoNavBar.classList.add("imgLogoNavbarDark");
    backgroundHover.forEach((item) =>
      item.classList.add("backgroundHoverDark")
    );
    marker.forEach((mark) => mark.classList.add("markerDark"));
    aboutMe.classList.add("fontDark");
    skillsContainer.classList.add("BGElementDark");
    langsContainer.classList.add("BGElementDark");
    todosLosP.forEach((p) => p.classList.add("fontDark"));
    todosLosH2.forEach((h) => h.classList.add("fontDark"));
    todosLosH3.forEach((h) => h.classList.add("fontDark"));
    todosLosH4.forEach((h) => h.classList.add("fontDark"));
    todosLosH5.forEach((h) => h.classList.add("fontDark"));
    todosLosH6.forEach((h) => h.classList.add("fontDark"));
    itemTrabajo.forEach((card) => card.classList.add("cardDark"));
    detalleTrabajo.forEach((det) => det.classList.add("itemDetalleDark"));
    contenedorX.forEach((x) => x.classList.add("xDark"));
    lineaDivisora1.forEach((linea) => linea.classList.add("lineaDark"));
    sectionContacto.classList.add("cardDarkContacto");
    labels.forEach((lab) => lab.classList.add("fontDark"));
    btnEnviarCorreo.classList.add("btnEnviarDark");
    logoFacebook.classList.add("logoFacebookDark");
    logoGithub.classList.add("logoGithubDark");
    logoLinkedin.classList.add("logoLinkedinDark");
    logoInstagram.classList.add("logoInstagramDark");
    logoRP.classList.add("logoRPDark");
    logoSitioWeb.forEach((logo) => logo.classList.add("iconoSitioWebDark"));
    logoVerDetalles.forEach((logo) => logo.classList.add("ver-detalles-dark")),
      btnDownloadLg.classList.add("btn-descargar-cv-dark");
    btnDownloadSm.classList.remove("btn-navbar-sm-dark");

    LS.setItem("theme", "dark");
  };

  btnDarkMode.addEventListener("click", (e) => {
    e.target.checked === false ? lightMode() : darkMode();
  });

  d.addEventListener("DOMContentLoaded", () => {
    LS.getItem("theme") === null && LS.setItem("theme", "light");
    LS.getItem("theme") === "light" && lightMode();
    LS.getItem("theme") === "dark" && darkMode();
  });
}

// ANIMACIÓN MENÚ HAMBURGUESA & NAVBAR
if (d.querySelector(".contenedor-menu-hamburguesa")) {
  const contenedorMenuHamburguesa = d.querySelector(
      ".contenedor-menu-hamburguesa"
    ),
    navBarOculto = d.querySelector(".nav-bar-oculto"),
    menuHamburguesa = d.querySelector(".menu-hamburguesa"),
    menuHamburguesaX = d.querySelector(".menu-hamburguesa-x"),
    linksNavBar = d.querySelectorAll(".contenedor-navbar-oculto li"),
    logoNavBar = d.querySelector(".logo-navbar");

  contenedorMenuHamburguesa.addEventListener("click", () => {
    navBarOculto.classList.toggle("nav-bar-oculto-revelado");
    menuHamburguesa.classList.toggle("menu-hamburguesa-oculto");
    menuHamburguesaX.classList.toggle("menu-hamburguesa-x-revelado");
  });
  logoNavBar.addEventListener("click", () => {
    navBarOculto.classList.remove("nav-bar-oculto-revelado");
    if (!navBarOculto.classList.contains("nav-bar-oculto-revelado")) {
      menuHamburguesa.classList.remove("menu-hamburguesa-oculto");
      menuHamburguesaX.classList.remove("menu-hamburguesa-x-revelado");
    }
  });
  linksNavBar.forEach((link) => {
    link.addEventListener("click", () => {
      navBarOculto.classList.remove("nav-bar-oculto-revelado");
      menuHamburguesa.classList.remove("menu-hamburguesa-oculto");
      menuHamburguesaX.classList.remove("menu-hamburguesa-x-revelado");
    });
  });
}

// ASIGNACIÓN DE EVENTO A BOTÓN DE DETALLES DE TRABAJOS
// TP1
let btnTP1 = d.getElementById("vista-previa-tp1.png"),
  contenedorTP1 = d.getElementById("id-vista-previa-tp1.png"),
  btnDeCierreDeDetalles = d.querySelectorAll(".contenedor-x");

btnTP1.addEventListener("click", () => {
  contenedorTP1.classList.add("item-trabajo-detalles-revelado");
});

// TP2
let btnTP2 = d.getElementById("vista-previa-tp2.png"),
  contenedorTP2 = d.getElementById("id-vista-previa-tp2.png");
btnTP2.addEventListener("click", () => {
  contenedorTP2.classList.add("item-trabajo-detalles-revelado");
});
// TP3
let btnTP3 = d.getElementById("vista-previa-tp3.png"),
  contenedorTP3 = d.getElementById("id-vista-previa-tp3.png");
btnTP3.addEventListener("click", () => {
  contenedorTP3.classList.add("item-trabajo-detalles-revelado");
});
// PP1
let btnPP1 = d.getElementById("vista-previa-pp1.png"),
  contenedorPP1 = d.getElementById("id-vista-previa-pp1.png");
btnPP1.addEventListener("click", () => {
  contenedorPP1.classList.add("item-trabajo-detalles-revelado");
});
let btnPP2 = d.getElementById("vista-previa-pp2.png"),
  contenedorPP2 = d.getElementById("id-vista-previa-pp2.png");
btnPP2.addEventListener("click", () => {
  contenedorPP2.classList.add("item-trabajo-detalles-revelado");
});

// TR1
let btnTR1 = d.getElementById("vista-previa-tr1-aydhornosrotativos.png"),
  contenedorTR1 = d.getElementById(
    "id-vista-previa-tr1-aydhornosrotativos.png"
  );
btnTR1.addEventListener("click", () => {
  contenedorTR1.classList.add("item-trabajo-detalles-revelado");
});

// TR2
let btnTR2 = d.getElementById("vista-previa-tr1-aydhornosrotativos-v1-1.png"),
  contenedorTR2 = d.getElementById(
    "id-vista-previa-tr1-aydhornosrotativos-v1-1.png"
  );
btnTR2.addEventListener("click", () => {
  contenedorTR2.classList.add("item-trabajo-detalles-revelado");
});

// TR3
let btnTR3 = d.getElementById("vista-previa-tr-almacennaturalkiara.png"),
  contenedorTR3 = d.getElementById(
    "id-vista-previa-tr-almacennaturalkiara.png"
  );
btnTR3.addEventListener("click", () => {
  contenedorTR3.classList.add("item-trabajo-detalles-revelado");
});

d.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    contenedorTP1.classList.remove("item-trabajo-detalles-revelado");
    contenedorTP2.classList.remove("item-trabajo-detalles-revelado");
    contenedorTP3.classList.remove("item-trabajo-detalles-revelado");
    contenedorPP1.classList.remove("item-trabajo-detalles-revelado");
    contenedorPP2.classList.remove("item-trabajo-detalles-revelado");
    contenedorTR1.classList.remove("item-trabajo-detalles-revelado");
    contenedorTR2.classList.remove("item-trabajo-detalles-revelado");
    contenedorTR3.classList.remove("item-trabajo-detalles-revelado");
  }
});

btnDeCierreDeDetalles.forEach((btn) => {
  btn.addEventListener("click", () => {
    contenedorTP1.classList.remove("item-trabajo-detalles-revelado");
    contenedorTP2.classList.remove("item-trabajo-detalles-revelado");
    contenedorTP3.classList.remove("item-trabajo-detalles-revelado");
    contenedorPP1.classList.remove("item-trabajo-detalles-revelado");
    contenedorPP2.classList.remove("item-trabajo-detalles-revelado");
    contenedorTR1.classList.remove("item-trabajo-detalles-revelado");
    contenedorTR2.classList.remove("item-trabajo-detalles-revelado");
    contenedorTR3.classList.remove("item-trabajo-detalles-revelado");
  });
});

// VALIDACIÓN DE DATOS

const btnEnviar = d.getElementById("btn-enviar"),
  formulario = d.getElementById("form-de-contacto"),
  containerTextoValidacionName = d.querySelector(
    ".containerTextoValidacionName"
  ),
  containerTextoValidacionNameExtension = d.querySelector(
    ".containerTextoValidacionNameExtension"
  ),
  containerTextoValidacionTel = d.querySelector(".containerTextoValidacionTel"),
  containerTextoValidacionEmail = d.querySelector(
    ".containerTextoValidacionEmail"
  ),
  containerTextoValidacionEmailValido = d.querySelector(
    ".containerTextoValidacionEmailValido"
  );

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVálido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const nombre = d.getElementById("nombre");
  const telefono = d.getElementById("tel");
  const email = d.getElementById("email");
  if (nombre.value === "") {
    containerTextoValidacionName.style.display = "initial";
    nombre.focus();
    return;
  } else {
    containerTextoValidacionName.style.display = "none";
  }
  if (nombre.value.length < 3) {
    containerTextoValidacionNameExtension.style.display = "initial";
    nombre.focus();
    return;
  } else {
    containerTextoValidacionNameExtension.style.display = "none";
  }
  if (telefono.value === "" || telefono.value.length < 9) {
    containerTextoValidacionTel.style.display = "initial";
    telefono.focus();
    return;
  } else {
    containerTextoValidacionTel.style.display = "none";
  }
  if (email.value === "") {
    containerTextoValidacionEmail.style.display = "initial";
    email.focus();
    return;
  } else {
    containerTextoValidacionEmail.style.display = "none";
  }
  if (!emailVálido(email.value)) {
    containerTextoValidacionEmailValido.style.display = "initial";
    email.focus();
    return;
  } else {
    containerTextoValidacionEmailValido.style.display = "none";
  }
  // CONFIRMACIÓN DE ENVÍO DE LA CONSULTA
  let capa = d.getElementById("capa");
  capa.style.display = "block";
  d.forms["form-de-contacto"].submit();
});

// Cálculo de edad
const calculoDeEdad = (fechaDeNac) => {
  let elementoEdad = d.getElementById("edad");
  let añoActual = new Date().getFullYear();
  let mesActual = new Date().getMonth() + 1;
  let diaActual = new Date().getDate();
  let miAñoDeNac = new Date(fechaDeNac).getFullYear();
  let miMesDeNac = new Date(fechaDeNac).getMonth() + 1;
  let miDiaDeNac = new Date(fechaDeNac).getDate() + 1;
  let edad = añoActual - miAñoDeNac;

  Math.sign(mesActual - miMesDeNac) !== 1 &&
  Math.sign(diaActual - miDiaDeNac) !== 1
    ? (elementoEdad.innerText = edad)
    : (elementoEdad.innerText = edad - 1);
};
calculoDeEdad("1984-05-18");
