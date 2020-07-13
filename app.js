const express = require('express');
const app = express();
app.listen(3030,()=>console.log("el servidor esta corriendo en el puerto 3030"))
const routesAutos = require('./routes/autos')
const routesHome = require('./routes/home')
const routesMarcas = require('./routes/marcas')
const routesSucursales = require('./routes/sucursales')

app.use('/', routesHome)
app.use('/sucursales', routesSucursales)
app.use('/autos', routesAutos)
app.use('/marcas', routesMarcas)