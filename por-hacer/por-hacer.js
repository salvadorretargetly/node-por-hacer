const fs = require("fs");


let listadoPorHacer = [];


const guardarDB = () => {

    return new Promise((resolve, reject) => {

        let data = JSON.stringify(listadoPorHacer);

        fs.writeFile("db/data.json", data, async(err) => {
            if (err)
                return reject("No se pudo grabar el archivo", err);

            return resolve();
        });
    });

}

/*
const guardarDB = async() => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile("db/data.json", data, async(err) => {
        if (err)
            throw new Error("No se pudo grabar el archivo", err);


        console.log("Recien termino de guardar el file");
        return;
    });
}*/

const cargarDB = () => {

    try {
        listadoPorHacer = require("../db/data.json");

    } catch (error) {
        listadoPorHacer = [];
    }


}

const actualizarTarea = (descripcion, completado = true) => {
    cargarDB();


    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion == descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else
        return false;

}

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion == descripcion;
    });

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else
        return false;

}


const listarTareas = () => {
    cargarDB();
    return listadoPorHacer;
}

const crear = async(descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    await guardarDB();

    return porHacer;


}

module.exports = {
    crear,
    borrar,
    listarTareas,
    actualizarTarea
}