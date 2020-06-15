const descripcion = {
    demand: true,
    alias: 'd',
};
const completado = {
    alias: 'c',
    default: true
};

const argv = require('yargs')

.command('crear', 'Crea un elemento por hacer', {descripcion})
.command('borrar', 'Borra una tarea', {descripcion})
.command('actualizar', 'Actualiza el estado completado de una tarea', {descripcion, completado})
.help()
.argv;



module.exports = {argv}