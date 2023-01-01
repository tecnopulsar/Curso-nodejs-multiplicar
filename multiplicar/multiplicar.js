const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base) || !Number(limite)) {
      reject("La base o el limite no son numeros");
      return;
    }
    let data =
      `=======================\n`.green +
      `===== tabla del ${base} =====\n`.green +
      `=======================\n`.green;
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }
    resolve(data);
  });
};

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base) || !Number(limite)) {
      reject("La base, no es un numero");
      return;
    }

    let data ='';

    for (let i = 1; i <= limite; i++) {
      data += `${base} x ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}.txt`);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
