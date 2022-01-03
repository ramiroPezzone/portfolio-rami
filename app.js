let express = require('express'),
app = express(),
trabajosPracticos = require('./trabajos/trabajosPracticos'),
trabajosReales = require('./trabajos/trabajosReales'),
proyectos = require('./trabajos/proyectos'),
skills = require('./trabajos/skills'),
softSkills = require('./trabajos/soft-skills'),
port = process.env.PORT;
if(port == null || port == "") {
    port = 8000;
}

// Puesta en línea del servidor
app.listen(port, () => {
    console.log(`Servidor en línea en puerto ${port}`);
});

// Motor de vistas
app.set('view engine', 'ejs')


// Carpeta pública
app.use(express.static(__dirname + '/public'))

// Seteando solicitudes post
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Index
app.get('/', (req, res) => {
    res.render('index', {
        trabajosPracticos: trabajosPracticos,
        trabajosReales: trabajosReales,
        proyectos: proyectos,
        skills: skills,
        softSkills: softSkills
    })
})
// EMAIL
app.use(require('./emailer/emailer'))
