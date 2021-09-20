//Importación e instancia de la clase donde se inserta, borra, 
//actualiza y consulta de una tabla.
let MetodosSql = require('./MetodosSql.js');
let sql = new MetodosSql();

//Base de datos adjuntada junto con el proyecto

/* EJEMPLOS CON PROMESAS */

//Insertar un dato 
// sql.insertarDato('Pitbull','Canis lupus familiaris','Cánidos', 0)
// .then((results) => console.log(results))
// .catch((err)=> console.log(err));

//Borrar un dato por id
// sql.borrarDato(33)
// .then((results) => console.log(results))
// .catch((err)=> console.log(err));

// Actualizar un dato por id
// sql.actualizarDato('Gorila Lomo Blanco','GorilusCienteficus','Homosapiens',1,27)
// .then((results) => console.log(results))
// .catch((err)=> console.log(err));

//Consultar por nombre
// sql.consultarPorNombre('Venado')
// .then((results) => console.log(results))
// .catch((err)=> console.log(err));

//Consultar todos los datos
// sql.consultarTodos()
// .then((results) => console.log(results))
// .catch((err)=> console.log(err));
