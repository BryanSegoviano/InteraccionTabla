let mysql = require('mysql');
let conexion = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: 'isaaca14',
 database: 'zoologicos'
});

class MetodosSql {

 insertarDato(nombre_vulgar, nombre_cientifico, familia, peligro_extincion) {
  return new Promise((resolve, reject) => {
   //Timeout de ejemplo para simular asincronia
   setTimeout(() => {
    let consulta = "INSERT into especies (nombre_vulgar, nombre_cientifico, familia, peligro_extincion)  VALUES (?,?,?,?)";
    this.#realizarConexion();
    conexion.query(consulta, [nombre_vulgar, nombre_cientifico, familia, peligro_extincion], (err, results) => {
     if (err) {
      reject(err);
     } else {
      resolve(nombre_vulgar + ' fue agregado correctamente');
     }
    });
    this.#desconectarConexion();
   }, 2000);
  });
 }

 borrarDato(idEspecie) {
  return new Promise((resolve, reject) => {
   //Timeout de ejemplo para simular asincronia
   setTimeout(() => {
    let consulta = "DELETE FROM especies WHERE id_especie = ?";
    this.#realizarConexion();
    conexion.query(consulta, [idEspecie], (err, results) => {
     if (err) {
      reject(err);
     } else {
      resolve('La especie con Id: ' + idEspecie + ' fue borrado correctamente');
     }
    });
    this.#desconectarConexion();
   }, 2000);
  });
 }

 actualizarDato(nombre_vulgar, nombre_cientifico, familia, peligro_extincion, idEspecie) {
  return new Promise((resolve, reject) => {
   //Timeout de ejemplo para simular asincronia
   setTimeout(() => {
    let consulta = "UPDATE especies SET nombre_vulgar = ?, nombre_cientifico = ?, familia = ?, peligro_extincion = ? WHERE id_especie = ?;"
    this.#realizarConexion();
    conexion.query(consulta, [nombre_vulgar, nombre_cientifico, familia, peligro_extincion, idEspecie], (err, results) => {
     if (err) {
      reject(err);
     } else {
      resolve(nombre_vulgar + ' fue actualizado correctamente');
     }
    });
    this.#desconectarConexion();
   }, 2000);
  });
 }

 consultarPorNombre(nombreEspecie) {
  return new Promise((resolve, reject) => {
   //Timeout de ejemplo para simular asincronia
   setTimeout(() => {
    let consulta = "SELECT * FROM especies WHERE nombre_vulgar = ?;"
    this.#realizarConexion();
    conexion.query(consulta, [nombreEspecie], (err, results) => {
     if (err) {
      reject(err);
     } else {
      resolve(results);
     }
    });
    this.#desconectarConexion();
   }, 2000);
  });
 }

 consultarTodos() {
  return new Promise((resolve, reject) => {
   //Timeout de ejemplo para simular asincronia
   setTimeout(() => {
    let consulta = "SELECT * FROM especies;"
    this.#realizarConexion();
    conexion.query(consulta, (err, results) => {
     if (err) {
      reject(err);
     } else {
      resolve(results);
     }
    });
    this.#desconectarConexion();
   }, 2000);
  });
 }

 #realizarConexion() {
  conexion.connect(err => {
   if (err) {
    console.log(err);
    return false;
   } else {
    console.log('BD Conectada');
    return true;
   }
  });
 }

 #desconectarConexion() {
  conexion.end(err => {
   if (err) {
    console.log(err);
   } else {
    console.log('BD Desconectada');
   }
  });
 }

}

module.exports = MetodosSql;

 // consultarPorNombre(nombreEspecie) {
 //  let consulta = "SELECT * FROM especies WHERE nombre_vulgar = ?;"
 //  if (this.#realizarConexion) {
 //   conexion.query(consulta, [nombreEspecie], (err, results) => {
 //    if (err) {
 //     console.log(err);
 //    } else {
 //     console.log(results);
 //    }
 //   });
 //  }
 //  this.#desconectarConexion();
 // }

/*
consultarTodos() {
let consulta = "SELECT * FROM especies;"
if (this.#realizarConexion) {
 conexion.query(consulta, (err, results) => {
  if (err) {
   console.log(err);
  } else {
   console.log(results);
  }
 });
}
this.#desconectarConexion();
}
*/

 // actualizarDato(nombre_vulgar, nombre_cientifico, familia, peligro_extincion, idEspecie) {
 //  let consulta = "UPDATE especies SET nombre_vulgar = ?, nombre_cientifico = ?, familia = ?, peligro_extincion = ? WHERE id_especie = ?;"
 //  if (this.#realizarConexion) {
 //   conexion.query(consulta, [nombre_vulgar, nombre_cientifico, familia, peligro_extincion, idEspecie], (err, results) => {
 //    if (err) {
 //     console.log(err);
 //    } else {
 //     console.log(results);
 //     console.log('Se actualizo correctamente el dato');
 //    }
 //   });
 //  }
 //  this.#desconectarConexion();
 // }

 // insertarDato(nombre_vulgar, nombre_cientifico, familia, peligro_extincion) {
 //  let consulta = "INSERT into especies (nombre_vulgar, nombre_cientifico, familia, peligro_extincion)  VALUES (?,?,?,?)";
 //  if (this.#realizarConexion) {
 //   conexion.query(consulta, [nombre_vulgar, nombre_cientifico, familia, peligro_extincion], (err, results) => {
 //    if (err) {
 //     console.log(err);
 //    } else {
 //     console.log(results);
 //     console.log('Se agrego correctamente el dato');
 //    }
 //   });
 //  }
 //  this.#desconectarConexion();
 // }

 // borrarDato(idEspecie) {
 //  let consulta = "DELETE FROM especies WHERE id_especie = ?";
 //  if (this.#realizarConexion) {
 //   conexion.query(consulta, [idEspecie], (err, results) => {
 //    if (err) {
 //     console.log(err);
 //    } else {
 //     console.log(results);
 //     console.log('Se elimino correctamente el dato');
 //    }
 //   });
 //  }
 //  this.#desconectarConexion();
 // }