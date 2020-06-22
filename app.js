const argv = require("./config/yargs").argv;
const colors = require("colors");
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];
switch (comando) {
    case "crear":
        crearArchivo(argv.tabla, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo.green}`))
            .catch((e) => console.log(e));
        break;
    case "listar":
        listarTabla(argv.tabla, argv.limite);
        break;

    default:
        console.log("Comando no reconocido");
        break;
}

//console.log('limite ', argv.limite);
