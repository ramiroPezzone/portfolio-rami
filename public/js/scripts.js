// DARKMODE HANDLER
const LS = localStorage;
const d = document;

const linksNavBar = document.querySelectorAll(".link-navbar-fixed"),
  contenedorNavbarSM = document.querySelector(".contenedor-navbar"),
  menuDesplegable = document.querySelector(".nav-bar-oculto"),
  logoNavbarSM = document.querySelector(".logo-navbar"),
  body = document.getElementsByTagName("body"),
  fotoPerfil = document.querySelector(".contenedor-foto-perfil"),
  logoNavBar = document.querySelector(".imgLogoNavbar"),
  backgroundHover = document.querySelectorAll(".backgroundHover"),
  marker = document.querySelectorAll(".marker"),
  aboutMe = document.querySelector(".contenedor-about-me"),
  skillsContainer = document.querySelector(".contenedor-general-skills"),
  langsContainer = document.querySelector(".contenedor-langs"),
  todosLosP = document.querySelectorAll("p"),
  todosLosH2 = document.querySelectorAll("h2"),
  todosLosH3 = document.querySelectorAll("h3"),
  todosLosH4 = document.querySelectorAll("h4"),
  todosLosH5 = document.querySelectorAll("h5"),
  todosLosH6 = document.querySelectorAll("h6"),
  itemTrabajo = document.querySelectorAll(".item-trabajo"),
  detalleTrabajo = document.querySelectorAll(
    ".contenedor-flex-detalles-trabajos"
  ),
  contenedorX = document.querySelectorAll(".contenedor-x"),
  lineaDivisora1 = document.querySelectorAll(".linea-divisora"),
  sectionContacto = document.querySelector(".contacto"),
  labels = document.querySelectorAll("label"),
  btnEnviarCorreo = document.querySelector("#btn-enviar"),
  logoFacebook = document.querySelector(".logo-facebook"),
  logoGithub = document.querySelector(".logo-github"),
  logoLinkedin = document.querySelector(".logo-linkedin"),
  logoInstagram = document.querySelector(".logo-instagram"),
  logoRP = document.querySelector(".logo-rp-rrss"),
  logoSitioWeb = document.querySelectorAll(".iconoSitioWeb"),
  logoVerDetalles = document.querySelectorAll(".ver-detalles"),
  docs = document.querySelector(".docs"),
  download = document.querySelector(".download");

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
    docs.classList.remove("docsDark");
    download.classList.remove("downloadDark");

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
      docs.classList.add("docsDark"),
      download.classList.add("downloadDark");

    LS.setItem("theme", "dark");
  };

  btnDarkMode.addEventListener("click", (e) => {
    e.target.checked === false ? lightMode() : darkMode();
  });

  d.addEventListener("DOMContentLoaded", () => {
    LS.getItem("theme") === null && LS.setItem("theme", "light");
    LS.getItem("theme") === "light" && lightMode();
    LS.getItem("theme") === "dark" && darkMode();
    console.log(LS.getItem("theme"));
    console.log(btnDarkMode.checked);
  });
}

// ANIMACIÓN MENÚ HAMBURGUESA & NAVBAR
if (document.querySelector(".contenedor-menu-hamburguesa")) {
  const contenedorMenuHamburguesa = document.querySelector(
      ".contenedor-menu-hamburguesa"
    ),
    navBarOculto = document.querySelector(".nav-bar-oculto"),
    menuHamburguesa = document.querySelector(".menu-hamburguesa"),
    menuHamburguesaX = document.querySelector(".menu-hamburguesa-x"),
    linksNavBar = document.querySelectorAll(".contenedor-navbar-oculto li"),
    logoNavBar = document.querySelector(".logo-navbar");

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
let btnTP1 = document.getElementById("vista-previa-tp1.png"),
  contenedorTP1 = document.getElementById("id-vista-previa-tp1.png"),
  btnDeCierreDeDetalles = document.querySelectorAll(".contenedor-x");

btnTP1.addEventListener("click", () => {
  contenedorTP1.classList.add("item-trabajo-detalles-revelado");
});

// TP2
let btnTP2 = document.getElementById("vista-previa-tp2.png"),
  contenedorTP2 = document.getElementById("id-vista-previa-tp2.png");
btnTP2.addEventListener("click", () => {
  contenedorTP2.classList.add("item-trabajo-detalles-revelado");
});
// TP3
let btnTP3 = document.getElementById("vista-previa-tp3.png"),
  contenedorTP3 = document.getElementById("id-vista-previa-tp3.png");
btnTP3.addEventListener("click", () => {
  contenedorTP3.classList.add("item-trabajo-detalles-revelado");
});
// PP1
let btnPP1 = document.getElementById("vista-previa-pp1.png"),
  contenedorPP1 = document.getElementById("id-vista-previa-pp1.png");
btnPP1.addEventListener("click", () => {
  contenedorPP1.classList.add("item-trabajo-detalles-revelado");
});
let btnPP2 = document.getElementById("vista-previa-pp2.png"),
  contenedorPP2 = document.getElementById("id-vista-previa-pp2.png");
btnPP2.addEventListener("click", () => {
  contenedorPP2.classList.add("item-trabajo-detalles-revelado");
});

// TR1
let btnTR1 = document.getElementById("vista-previa-tr1-aydhornosrotativos.png"),
  contenedorTR1 = document.getElementById(
    "id-vista-previa-tr1-aydhornosrotativos.png"
  );
btnTR1.addEventListener("click", () => {
  contenedorTR1.classList.add("item-trabajo-detalles-revelado");
});

// TR2
let btnTR2 = document.getElementById(
    "vista-previa-tr1-aydhornosrotativos-v1-1.png"
  ),
  contenedorTR2 = document.getElementById(
    "id-vista-previa-tr1-aydhornosrotativos-v1-1.png"
  );
btnTR2.addEventListener("click", () => {
  contenedorTR2.classList.add("item-trabajo-detalles-revelado");
});

// TR3
let btnTR3 = document.getElementById("vista-previa-tr-almacennaturalkiara.png"),
  contenedorTR3 = document.getElementById(
    "id-vista-previa-tr-almacennaturalkiara.png"
  );
btnTR3.addEventListener("click", () => {
  contenedorTR3.classList.add("item-trabajo-detalles-revelado");
});

document.addEventListener("keydown", (e) => {
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

const btnEnviar = document.getElementById("btn-enviar"),
  formulario = document.getElementById("form-de-contacto"),
  containerTextoValidacionName = document.querySelector(
    ".containerTextoValidacionName"
  ),
  containerTextoValidacionNameExtension = document.querySelector(
    ".containerTextoValidacionNameExtension"
  ),
  containerTextoValidacionTel = document.querySelector(
    ".containerTextoValidacionTel"
  ),
  containerTextoValidacionEmail = document.querySelector(
    ".containerTextoValidacionEmail"
  ),
  containerTextoValidacionEmailValido = document.querySelector(
    ".containerTextoValidacionEmailValido"
  );

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVálido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const nombre = document.getElementById("nombre");
  const telefono = document.getElementById("tel");
  const email = document.getElementById("email");
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
  let capa = document.getElementById("capa");
  capa.style.display = "block";
  document.forms["form-de-contacto"].submit();
});
