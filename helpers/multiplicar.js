const colors = require("colors");

const fs = require("fs");
// import fs from "fs"; esto funciona si se ponte en el package.json "type": "module"

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
   let salida = "";

   for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
   }

   if (listar) {
      console.log("=====================".green);
      console.log("Tabla del: ", colors.bold.red(base));
      console.log("=====================".green);

      console.log(salida);
   }

   fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

   return `Tabla-${base}.txt`;
};

module.exports = {
   crearArchivo,
};
