const opts = {
    crear: {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: "Descripción de la task"
        }
    },
    borrar: {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: "Descripción de la task"
        }
    },
    actualizar: {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: "Descripción de la task"
        },
        completado: {
            alias: 'c',
            default: true
        }
    }
}


const argv = require("yargs").command("crear", "Crea una task", opts.crear)
    //.command("listar","Lista todas las tasks",)
    .command("actualizar", "actualiza todas las tasks", opts.actualizar)
    .command("borrar", "borra una task cualquiera", opts.borrar)
    .help()
    .argv


module.exports = {
    argv
}