const proyectosPersonales = [
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
