// ANIMACIÓN MENÚ HAMBURGUESA & NAVBAR
const contenedorMenuHamburguesa = document.querySelector(".contenedor-menu-hamburguesa"),
    navBarOculto = document.querySelector(".nav-bar-oculto"),
    menuHamburguesa = document.querySelector(".menu-hamburguesa"),
    menuHamburguesaX = document.querySelector(".menu-hamburguesa-x"),
    linksNavBar = document.querySelectorAll(".contenedor-navbar-oculto li"),
    logoNavBar = document.querySelector(".logo-navbar")

contenedorMenuHamburguesa.addEventListener("click", () => {
    navBarOculto.classList.toggle("nav-bar-oculto-revelado")
    menuHamburguesa.classList.toggle("menu-hamburguesa-oculto")
    menuHamburguesaX.classList.toggle("menu-hamburguesa-x-revelado")
})
logoNavBar.addEventListener("click", () => {
    navBarOculto.classList.remove("nav-bar-oculto-revelado")
    if (!navBarOculto.classList.contains("nav-bar-oculto-revelado")) {
        menuHamburguesa.classList.remove("menu-hamburguesa-oculto")
        menuHamburguesaX.classList.remove("menu-hamburguesa-x-revelado")
    }
})

linksNavBar.forEach(link => {
    link.addEventListener("click", () => {
        navBarOculto.classList.remove("nav-bar-oculto-revelado")
        menuHamburguesa.classList.remove("menu-hamburguesa-oculto")
        menuHamburguesaX.classList.remove("menu-hamburguesa-x-revelado")
    })
});

// ASIGNACIÓN DE EVENTO A BOTÓN DE DETALLES DE TRABAJOS
// TP1
let btnTP1 = document.getElementById("vista-previa-tp1.png"), contenedorTP1 = document.getElementById("id-vista-previa-tp1.png"),
    btnDeCierreDeDetalles = document.querySelectorAll(".contenedor-x");

btnTP1.addEventListener("click", () => {
    contenedorTP1.classList.add("item-trabajo-detalles-revelado")
})

// TP2
let btnTP2 = document.getElementById("vista-previa-tp2.png"),
    contenedorTP2 = document.getElementById("id-vista-previa-tp2.png");
btnTP2.addEventListener("click", () => {
    contenedorTP2.classList.add("item-trabajo-detalles-revelado")
})
// TP3
let btnTP3 = document.getElementById("vista-previa-tp3.png"),
    contenedorTP3 = document.getElementById("id-vista-previa-tp3.png");
btnTP3.addEventListener("click", () => {
    contenedorTP3.classList.add("item-trabajo-detalles-revelado")
})

// TR1
let btnTR1 = document.getElementById("vista-previa-tr1-aydhornosrotativos.png"),
    contenedorTR1 = document.getElementById("id-vista-previa-tr1-aydhornosrotativos.png");
btnTR1.addEventListener("click", () => {
    contenedorTR1.classList.add("item-trabajo-detalles-revelado")
})

// TR2
let btnTR2 = document.getElementById("vista-previa-tr1-aydhornosrotativos-v1-1.png"),
    contenedorTR2 = document.getElementById("id-vista-previa-tr1-aydhornosrotativos-v1-1.png");
btnTR2.addEventListener("click", () => {
    contenedorTR2.classList.add("item-trabajo-detalles-revelado")
})

// // PR1
// let btnPR1 = document.getElementById("mercado-natural-kiara.jpg"),
//     contenedorPR1 = document.getElementById("id-mercado-natural-kiara.jpg");
// btnPR1.addEventListener("click", () => {
//     contenedorPR1.classList.add("item-trabajo-detalles-revelado")
// })
// // PR2
// let btnPR2 = document.getElementById("sin-imagen.jpg"),
//     contenedorPR2 = document.getElementById("id-sin-imagen.jpg");
// btnPR2.addEventListener("click", () => {
//     contenedorPR2.classList.add("item-trabajo-detalles-revelado")
// })


btnDeCierreDeDetalles.forEach(btn => {
    btn.addEventListener("click", () => {
        contenedorTP1.classList.remove("item-trabajo-detalles-revelado")
        contenedorTP2.classList.remove("item-trabajo-detalles-revelado")
        contenedorTP3.classList.remove("item-trabajo-detalles-revelado")
        contenedorTR1.classList.remove("item-trabajo-detalles-revelado")
        contenedorTR2.classList.remove("item-trabajo-detalles-revelado")
        // contenedorPR1.classList.remove("item-trabajo-detalles-revelado")
        // contenedorPR2.classList.remove("item-trabajo-detalles-revelado")
    })
});

// VALIDACIÓN DE DATOS

const btnEnviar = document.getElementById('btn-enviar'),
    formulario = document.getElementById("form-de-contacto"),
    ok = document.getElementById("ok"),
    capa = document.getElementById("capa")

const validación = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('tel');
    const email = document.getElementById('email');
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
}

const emailVálido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


// CONFIRMACIÓN DE ENVÍO DE LA CONSULTA
btnEnviar.addEventListener('click', (e) => {

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        capa.style.display = "block";
    })

    ok.addEventListener("click", (e) => {
        capa.style.display = "none";
        document.forms["form-de-contacto"].submit();
    })
});
















