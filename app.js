let express = require('express'),
    app = express(),
    trabajosPracticos = require('./trabajos/trabajosPracticos'),
    trabajosReales = require('./trabajos/trabajosReales'),
    techs = require('./skills/techs'),
    softSkills = require('./skills/soft-skills'),
    lang = require('./skills/langs'),
    port = process.env.PORT;
if (port == null || port == "") {
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
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Index
app.get('/', (req, res) => {
    res.render('index', {
        trabajosPracticos: trabajosPracticos,
        trabajosReales: trabajosReales,
        techs: techs,
        softSkills: softSkills,
        lang: lang
    })
})
// EMAIL
app.use(require('./emailer/emailer'))
