const { argv } = require("./config/yargs");
const porHacer = require("./por-hacer/por-hacer");
const colors = require("colors");


let comando = argv._[0];

switch (comando) {
    case 'crear':
        porHacer.crear(argv.descripcion).then(tarea => {
            console.log(`La task ${ tarea.descripcion } fue creada exitosamente`);
        }).catch(err => console.log(err));
        break
    case 'listar':

        let tareas = porHacer.listarTareas();
        for (let tarea of tareas) {
            console.log("========Por hacer========".green);
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
            console.log("======================".green);
        }
        break
    case 'actualizar':
        let actualizado = porHacer.actualizarTarea(argv.descripcion, argv.completado)
        console.log(actualizado);
        break
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(borrado);
        break

    default:
        console.log("Comando no encontrado");
}