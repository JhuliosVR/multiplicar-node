const fs = require('fs');
const colors = require("colors");

let crearArchivo = (tabla, limite = 10) => {
    return new Promise((resolve, reyect) => {
        if (!Number(tabla)) {
            reyect(`El valor ingresado ${tabla} no es numero`);
            return;
        } else {

            var tablaMult = "";
            var carpeta = "tablas";
            for (let i = 1; i <= limite; i++) {
                tablaMult += `${tabla} * ${i} = ${tabla*i}\n`;
            }
            fs.writeFile(`${carpeta}/tabla-${tabla}.txt`, tablaMult, (err) => {
                if (err) reyect(err);
                else resolve(`tabla-${tabla}.txt`)
                    // console.log(`El archivo tabla-${tabla}.txt ha sido creado`);
            });
        }
    })
}

let listarTabla = (tabla, limite = 10) => {
    console.log("==========================".green);
    console.log(    `LISTAR  TABLA ${limite}`.green);
    console.log("==========================".green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${tabla} * ${i} = ${tabla*i}`);
    };
    console.log("==========================".blue);
}

module.exports = {
    crearArchivo,
    listarTabla
}