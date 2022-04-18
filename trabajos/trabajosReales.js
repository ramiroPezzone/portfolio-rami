const trabajosReales = [
  {
    titulo: `Almacen natural Kiara`,
    imagen: "vista-previa-tr-almacennaturalkiara.png",
    tecnologias: "STACK MERN - BOOTSTRAP",
    modulos:
      "AXIOS - REACT-BOOTSTRAP - FORMIK - REACT-HOOK-FORM - REACT-ROUTER-DOM - REACT-SELECT - CLOUDINARY - DOTENV - MONGOOSE - MULTER - CORS",
    descripcion:
      "Sitio web dinámico armado para un mercado natural compuesto por (1) sitio para clientes, (2) sitio para administradores y (3) servidor. En el primero los clientes pueden ingresar, ver el catálogo, visualizar por categorías, seleccionar productos, ver el carrito, editar el pedido y una vez confirmado el mismo se envía por medio del servicio de mensajería Whatsapp (el mensaje se formatea de manera que se envíe una solicitud de tipo GET a la API de Whatsapp con el mensaje incluido en la misma, de forma que al abrirse automáticamente el Whatsapp del cliente ya esté el mensaje con el pedido y los datos de nombre y dirección de envío). Lo que el cliente seleccione como productos para añadir al carrito queda almacenado en la memoria del LocalStorage hasta que el pedido sea enviado, luego la memoria se reestablece a cero. Por el lado del administrador, el mismo ingresa con su respectivo nombre de usuario y contraseña y puede agregar productos, editarlos, eliminarlos, como así también las categorías en las que los mismos se organizarán. El administrador tiene una vista preliminar de como verá el catálogo el cliente aunque con mayor información (como puede ser stock disponible). Ambos sitios hacen las consultas al mismo servidor, con la única diferencia de que el usuario solo cuenta con solicitudes de consumo de datos, mientras que en el sitio del administrador, como ya se mencionó, tiene configuradas rutas de tanto de tipo get como también de tipo post, para poder tanto visualizar la información como crear nueva, editarla o eliminarla. Las imágenes que seleccione el administrador serán alojadas en los servidores de Cloudinary.",
    observaciones:
      "La interfaz de usuarios, tanto para clientes como para administradores están alojadas en los servidores de Vercel. El servidor se encuentra alojado en Heroku.",
    link: "https://mercadito-natutal-kiara-v1-front.vercel.app/",
    link2: "https://mercadito-natutal-kiara-v1-admin-front.vercel.app/",
  },
  {
    titulo: "A & D -Segunda versión-",
    imagen: "vista-previa-tr1-aydhornosrotativos-v1-1.png",
    tecnologias: "HTML - CSS - JS - NODEJS",
    modulos: "EXPRESS - EJS - NODEMAILER",
    descripcion:
      "Segunda versión del sitio web estático para fábrica de hornos rotativos para panaderías. En esta ocasión es una refactorización del primer sitio web que realicé pero esta vez haciendo uso de más herramientas, incluyendo de Backend. Se le aplicó un estilo más profesional, prolijo y amistoso, brindando al usuario final una experiencia más gratificante ya que el sitio le permite una mayor interactividad. Los colores utilizados fueron seleccionados por medio de paleta y declarados en la raíz del código para una mas fácil implementación, al igual que las fuentes. Se agregó un carrusel con capturas de pantalla de opiniones de los clientes.Cuenta además con un formulario de contacto en donde el cliente puede enviar su consulta. Se implementó el patrón de arquitectura Modelo-Vista-Controlador, utilizando como motor de vistas el EJS.",
    observaciones:
      "Como podrá observarse, el sitio mencionado se encuentra alojado en Heroku para poder ser visualizado. Actualmente la empresa se encuentra utilizando el sitio sin las funcionalidades de Backend, como tampoco del formulario de contacto. Esos cambios se verán reflejados en un futuro próximo.",
    link: "https://ayd-hornos-rotativos-v-1-1.herokuapp.com/",
  },
  {
    titulo: "A & D -Primera versión-",
    imagen: "vista-previa-tr1-aydhornosrotativos.png",
    tecnologias: "HTML - CSS - JS",
    modulos: "-",
    descripcion:
      "Sitio web estático para fábrica de hornos rotativos para panaderías.",
    observaciones:
      "Este sitio lo tomé como un desafío para poner en práctica todo lo aprendido inclusive desde antes de haber iniciado la formación que aún en la actualidad curso. Tiene una estructura de etiquetas algo dificil de escalar, como también un diseño del responsive que claramente puede notarse la falta de experiencia en el manejo sistemas de grids o de flexbox. Dada la falta de conocimiento de ese primer momento no me era posible agregar un formulario de contacto para que el cliente envíe sus datos conjuntamente con una consulta. Todas estas limitaciones mencionadas se vieron superadas, dando vida luego a la segunda versión del mismo sitio, la cual presento a continuación.",
    link: "https://aydhornosrotativos.vercel.app/",
  },
];

module.exports = trabajosReales;
