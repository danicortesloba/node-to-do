const fs = require('fs');

let listadoTareas = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTareas);
    fs.writeFile('db/data.json', data, (err) =>{
        if(err) throw new Error('No se pudo grabar', err)
    });
}

const cargarDB = () => {
    try {
        listadoTareas = require('../db/data.json');
    } catch(error){
        listadoTareas = [];
    }
    
}

const getListado = () => {
    cargarDB();
    return listadoTareas;

}

const crear = (descripcion)  => {
    cargarDB();
    let tarea = {
        descripcion,
        completado: false
    };

    listadoTareas.push(tarea);
    guardarDB();
    return tarea;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoTareas.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index>= 0) {
        listadoTareas[index].completado = completado;
        guardarDB();
        return true;
    }else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();
    let nuevoListado = listadoTareas.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (nuevoListado.length === listadoTareas.length){
        return false
    } else {
        listadoTareas = nuevoListado;
        guardarDB();
        return true;
    }
  

}

module.exports = {
    crear, getListado, actualizar, borrar
}