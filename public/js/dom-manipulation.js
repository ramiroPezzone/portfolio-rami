// DARKMODE HANDLER
if (document.getElementById("toggle-dark-mode")) {
  const btnDarkMode = document.getElementById("toggle-dark-mode"),
    linksNavBar = document.querySelectorAll(".link-navbar-fixed"),
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
    logoVerDetalles = document.querySelectorAll(".ver-detalles");

  if (btnDarkMode.checked) {
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
    sectionContacto.classList.add("cardDark");
    labels.forEach((lab) => lab.classList.add("fontDark"));
    btnEnviarCorreo.classList.add("btnEnviarDark");
    logoFacebook.classList.add("logoFacebookDark");
    logoGithub.classList.add("logoGithubDark");
    logoLinkedin.classList.add("logoLinkedinDark");
    logoInstagram.classList.add("logoInstagramDark");
    logoRP.classList.add("logoRPDark");
    logoSitioWeb.forEach((logo) => logo.classList.add("iconoSitioWebDark"));
    logoVerDetalles.forEach((logo) => logo.classList.add("ver-detalles-dark"));
  }

  btnDarkMode.addEventListener("click", () => {
    body[0].classList.toggle("bodyDark");
    contenedorNavbarSM.classList.toggle("navbarSMDark");
    logoNavbarSM.classList.toggle("imgLogoNavbarDark");
    menuDesplegable.classList.toggle("BGElementDarkParaNavbar");
    fotoPerfil.classList.toggle("fotoPerfilDark");
    linksNavBar.forEach((link) => link.classList.toggle("fontDark"));
    logoNavBar.classList.toggle("imgLogoNavbarDark");
    backgroundHover.forEach((item) =>
      item.classList.toggle("backgroundHoverDark")
    );
    marker.forEach((mark) => mark.classList.toggle("markerDark"));
    aboutMe.classList.toggle("fontDark");
    skillsContainer.classList.toggle("BGElementDark");
    langsContainer.classList.toggle("BGElementDark");
    todosLosP.forEach((p) => p.classList.toggle("fontDark"));
    todosLosH2.forEach((h) => h.classList.toggle("fontDark"));
    todosLosH3.forEach((h) => h.classList.toggle("fontDark"));
    todosLosH4.forEach((h) => h.classList.toggle("fontDark"));
    todosLosH5.forEach((h) => h.classList.toggle("fontDark"));
    todosLosH6.forEach((h) => h.classList.toggle("fontDark"));
    itemTrabajo.forEach((card) => card.classList.toggle("cardDark"));
    detalleTrabajo.forEach((det) => det.classList.toggle("itemDetalleDark"));
    contenedorX.forEach((x) => x.classList.toggle("xDark"));
    lineaDivisora1.forEach((linea) => linea.classList.toggle("lineaDark"));
    sectionContacto.classList.toggle("cardDark");
    labels.forEach((lab) => lab.classList.toggle("fontDark"));
    btnEnviarCorreo.classList.toggle("btnEnviarDark");
    logoFacebook.classList.toggle("logoFacebookDark");
    logoGithub.classList.toggle("logoGithubDark");
    logoLinkedin.classList.toggle("logoLinkedinDark");
    logoInstagram.classList.toggle("logoInstagramDark");
    logoRP.classList.toggle("logoRPDark");
    logoSitioWeb.forEach((logo) => logo.classList.toggle("iconoSitioWebDark"));
    logoVerDetalles.forEach((logo) =>
      logo.classList.toggle("ver-detalles-dark")
    );
  });
}
//

// ANIMACIÓN MENÚ HAMBURGUESA & NAVBAR
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

btnDeCierreDeDetalles.forEach((btn) => {
  btn.addEventListener("click", () => {
    contenedorTP1.classList.remove("item-trabajo-detalles-revelado");
    contenedorTP2.classList.remove("item-trabajo-detalles-revelado");
    contenedorTP3.classList.remove("item-trabajo-detalles-revelado");
    contenedorTR1.classList.remove("item-trabajo-detalles-revelado");
    contenedorTR2.classList.remove("item-trabajo-detalles-revelado");
    contenedorTR3.classList.remove("item-trabajo-detalles-revelado");
  });
});

// VALIDACIÓN DE DATOS

const btnEnviar = document.getElementById("btn-enviar"),
  formulario = document.getElementById("form-de-contacto"),
  ok = document.getElementById("ok"),
  capa = document.getElementById("capa");

const validación = (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre");
  const telefono = document.getElementById("tel");
  const email = document.getElementById("email");
  if (nombre.value === "") {
    alert("Por favor, escribe tu nombre.");
    nombre.focus();
    return false;
  }
  if (telefono.value === "") {
    alert("Por favor, escribe número de contacto.");
    telefono.focus();
    return false;
  }

  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    emailAddress.focus();
    return false;
  }

  return true; //Se pueden enviar los datos del formulario al servidor
};

const emailVálido = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// CONFIRMACIÓN DE ENVÍO DE LA CONSULTA
btnEnviar.addEventListener("click", (e) => {
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    capa.style.display = "block";
  });

  ok.addEventListener("click", (e) => {
    capa.style.display = "none";
    document.forms["form-de-contacto"].submit();
  });
});
