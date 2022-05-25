let express = require("express"),
  router = express.Router(),
  nodemailer = require("nodemailer"),
  usuario = "ramiro.pezzone.emailer@gmail.com",
  contrasenia = "aiclfwwgpgovmrak",
  enviarA = "ramiro.pezzone@gmail.com",
  { DateTime } = require("luxon");

let dateNow = DateTime.now().setLocale().toFormat("DDDD, HH:mm:ss");

router.post("/contacto", async (req, res) => {
  const { nombre, tel, email, company, mensaje } = req.body; 

  const mensajeSaliente = `<h1>Un nuevo mensaje fue enviado el día ${dateNow}</h1>
  <hr>
  <h2 style="color: rgb(150, 150, 150)"><u>Los datos de contacto son</u>:</h2>
  <h3 style="color: rgb(150, 150, 150)"><u>Nombre completo</u>:</h3>
  <h3 style="color: #000">${nombre}</h3>
  <h3 style="color: rgb(150, 150, 150)"><u>Nombre de la compañía</u>:</h3>
  <h3 style="color: #000">${company}</h3>
  <h3 style="color: rgb(150, 150, 150)"><u>Teléfono</u>:</h3>
  <h3><a style="text-decoration:none" href=tel:${tel}>${tel}</a></h3>
  <h3 style="color: rgb(150, 150, 150)"><u>Correo electrónico</u>:</h3>
  <h3><a href=mailto.${email}>${email}</a></h3>
  <h3 style="color: rgb(150, 150, 150)"><u>Mensaje</u>:</h3>
  <h3 style="color: #000">${mensaje}</h3>`;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: usuario,
      pass: contrasenia,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: '"Solicitud de contacto desde el sitio web de Ramiro Pezzone" <ramiro.pezzone.emailer@gmail.com>',
    to: enviarA,
    subject: `Nueva consulta desde la web`,
    html: mensajeSaliente,
  });

  console.log(
    "El mensaje fue enviado correctamente con el ID" + info.messageId
  );

  res.redirect("/");
});

module.exports = router;
