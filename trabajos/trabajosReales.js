const trabajosReales = [
    {
        titulo: 'A & D - Hornos rotativos -Primera versión-',
        imagen: 'vista-previa-tr1-aydhornosrotativos.png',
        tecnologias: 'HTML - CSS - JS',
        modulos: '-',
        descripcion: 'Sitio web estático para fábrica de hornos rotativos para panaderías.',
        observaciones: 'Este sitio lo tomé como un desafío para poner en práctica todo lo aprendido inclusive desde antes de haber iniciado la formación que aún en la actualidad curso. Tiene una estructura de etiquetas algo dificil de escalar, como también un diseño del responsive que claramente puede notarse la falta de experiencia en el manejo sistemas de grids o de flexbox. Dada la falta de conocimiento de ese primer momento no me era posible agregar un formulario de contacto para que el cliente envíe sus datos conjuntamente con una consulta. Todas estas limitaciones mencionadas se vieron superadas, dando vida luego a la segunda versión del mismo sitio, la cual presento a continuación.',
        link: 'https://aydhornosrotativos.vercel.app/'
    },
    {
        titulo: 'A & D - Hornos rotativos -Segunda versión-',
        imagen: 'vista-previa-tr1-aydhornosrotativos-v1-1.png',
        tecnologias: 'HTML - CSS - JS - NODEJS',
        modulos: 'EXPRESS - EJS - NODEMAILER',
        descripcion: 'Segunda versión del sitio web estático para fábrica de hornos rotativos para panaderías. En esta ocasión es una refactorización del primer sitio web que realicé pero esta vez haciendo uso de más herramientas, incluyendo de Backend. Se le aplicó un estilo más profesional, prolijo y amistoso, brindando al usuario final una experiencia más gratificante ya que el sitio le permite una mayor interactividad. Los colores utilizados fueron seleccionados por medio de paleta y declarados en la raíz del código para una mas fácil implementación, al igual que las fuentes. Se agregó un carrusel con capturas de pantalla de opiniones de los clientes.Cuenta además con un formulario de contacto en donde el cliente puede enviar su consulta. Se implementó el patrón de arquitectura Modelo-Vista-Controlador, utilizando como motor de vistas el EJS.',
        observaciones: "Como podrá observarse, el sitio mencionado se encuentra alojado en Heroku para poder ser visualizado. Actualmente la empresa se encuentra utilizando el sitio sin las funcionalidades de Backend, como tampoco del formulario de contacto. Esos cambios se verán reflejados en el transcurso del mes de enero '22.",
        link: 'https://ayd-hornos-rotativos-v-1-1.herokuapp.com/'

    }
]

module.exports = trabajosReales