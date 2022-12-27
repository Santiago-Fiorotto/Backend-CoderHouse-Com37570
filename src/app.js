const express = require('express')
const app = express()

app.get('/bienvenida/:nombre/:apellido', function (req, res) {
    const nombre = req.params.nombre;  
    const apellido = req.params.apellido; 
    const respuesta =  `
    <html>
      <body>
        <h1>Bienvenido ${nombre} ${apellido}</h1>
      </body>
    </html>`;
  res.send(respuesta);
});

const estudiantes = [
        {nombre:"Santiago", id:1},
        {nombre:"Martin", id:2},
        {nombre:"Delfina", id:3},
        {nombre:"Patricia", id:4},
];

app.get (`/estudiantes/:id`,(req,res) => {
    const estudiante = estudiantes.find((e) => e.id === Number (req.params.id))
    res.send(estudiante)
});


app.get("/estudiantes", (req, res) => {
    const limite = req.query.limite;
    const idEstudiante = req.query.id;
    let respuesta = estudiantes;
    if (limite && !isNaN(Number(limite))) {
      respuesta = respuesta.slice(0, limite);
    }
    if (idEstudiante && !isNaN(Number(idEstudiante))) {
      respuesta = respuesta[idEstudiante];
    }
    res.send(respuesta);
  });

app.get(`/usuario`, (req,res) => {
    const respuesta = {
        nombre: "Santi",
        apellido: "fiorotto",
        edad: 26,
        correo: "santifiorotto@hotmail.com",
    }
    res.send(respuesta);
})

app.listen(3005)