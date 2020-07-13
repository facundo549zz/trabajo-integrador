const fs = require('fs')
const dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))


const autos = {
    index: function(req, res){
        res.set({'content-type':'text/plain;charset=utf-8'})
            let cantidad = 0;
            dbConcesionarias.forEach(element => {
                cantidad += element.autos.length})
            res.write('Contamos con ' + cantidad + ' vehiculos en nuestras sucursales \n\n')
            dbConcesionarias.forEach(function(elemento){
                elemento.autos.forEach(function(auto){
                    res.write('Marca: ' + auto.marca + '\n' + 'Modelo ' + auto.modelo + '\n' + 'Anio: ' + auto.anio + '\n' + 'Color: ' + auto.color + '\n\n')
                })
            })
            res.end()
        }
    }



module.exports = autos