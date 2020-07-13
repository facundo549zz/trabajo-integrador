const fs = require('fs')
const dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))


const home = {
    index:function(req, res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('te damos la bienvenida a concecionarias DH...\n')
        res.write('\n\n')
        res.write('aqui debajo podras ver nuestras sucursales: \n\n')
        dbConcesionarias.forEach(sucursales => {
            res.write(sucursales.sucursal + '\n')
            
            
        });
        res.end()
    }
}



module.exports = home