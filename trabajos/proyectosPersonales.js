const proyectosPersonales = [
  {
    titulo: "Smart Wallet",
    imagen: "vista-previa-pp3.png",
    demoResponsive: "demoResponsiveSmartWallet.png",
    tecnologias: "HTML - CSS - JS - NODEJS - BOOTSTRAP",
    descripcion:
      "Proyecto inspirado en los consejos de T. Harv Eker en su libro 'Secretos de una mente millonaria', la propuesta del mismo es que sea utilizado como herramienta de registro de ingresos y egresos, siendo éstos últimos dividos en categorías, tal como se recomienda en el libro mencionado. Al contar con el sistema de autenticación oAuth2 el usuario debe iniciar sesión con su cuenta de Google y no se le pide ningún dato personal adicional. La primera vez que inicia sesión se le solicita que haga una primer división de como considera que deberá dividir su presupuesto mensual, pudiendo también ser editado en otro momento. Luego de eso, siempre que vuelva a ingresar inicia en la pantalla principal en la que se muestran solo dos botones, uno para registrar ingresos y otro para los egresos. Cuenta también con un apartado para ver los movimientos registrados. Pensado para que sea una herramienta práctica y agil, en la que el usuario solo ingrese, registre y salga, y luego realice las consultas cuando lo crea necesario. Realizado bajo la arquitectura MVC y con el motor de vistas EJS. ",
    link: "https://smart-wallet-by-ramiro.herokuapp.com/",
    linkGithub: "https://github.com/ramiroPezzone/smart-wallet.git",
    observaciones: "SIN OBS",
  },
  {
    titulo: "Sitio web personal",
    imagen: "vista-previa-pp1.png",
    demoResponsive: "demoResponsivePortfolioRami.png",
    tecnologias: "HTML - CSS - JS - NODEJS",
    descripcion:
      "Realizado bajo la arquitectura MVC y con el motor de vistas EJS. Dividida en pequeños archivos los cuales conforman luego todos juntos el index, como una suerte de componentes de React. Se utilizó multer como módulo para la subida de imágenes al servidor y Nodemailer para el envío de emails",
    link: "",
    linkGithub: "https://github.com/ramiroPezzone/portfolio-rami.git",
    observaciones: "SIN OBS",
  },
  {
    titulo: "StoryBooks",
    imagen: "vista-previa-pp2.png",
    demoResponsive: "demoResponsiveStoryBooksi.png",
    tecnologias: "HTML - CSS - JS - NODEJS - MATERIALIZE",
    modulos:
      "CONNECT-MONGO - DOTENV - EJS - EXPRESS - EXPRESS-SESSION - MONGOOSE - PASSPORT - PASSPORT-GOOGLE-OAUTH2",
    descripcion:
      "Consistente en un sitio en el cual cualquier usuario puede ingresar con su cuenta de Google y en el se ven todas las historias creadas por todos los usuarios, cada uno puede crear su propia historia e inclusive decidir si quiere que los demás la vean o que quede almacenada como privada. Las historias quedan almacenadas en la base de datos MongoDB y pueden ser editadas y/o eliminadas cuando el usuario lo disponga. A su vez pueden también visualizarse todas la historias de un usuario en particular, como así también ingresar a una para leerla completa. También pueden hacerse comentarios en las historias y solo el autor del mismo puede eliminarlos",
    link: "https://historiaspersonales.herokuapp.com/",
    linkGithub: "https://github.com/ramiroPezzone/storyBooks.git",
    observaciones:
      "Para el ingreso con la cuenta de google se utiliza el estándar OAuth2, de manera que se obtienen los datos de nombres y foto de perfil, sin vulnerar los datos personales del usuario.",
  },
];

module.exports = proyectosPersonales;
