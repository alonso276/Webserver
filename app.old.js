// console.log('hola mundo');

//!create server
const http = require('http');

http
	.createServer((req, res) => {
		//la respuesta que daría una solicitud a mi backend

		// res.setHeader('Content-disposition', 'attachment; filename=lista.csv');
		// res.writeHead(200, { 'Content-Type': 'application/csv' });

		// res.write('id, nombre\n');
		// res.write('1, Lidia\n');
		// res.write('2, Inés\n');
		// res.write('3, Iris\n');
		// res.write('4, Steve\n');

		// const persona = {
		// 	id: 1,
		// 	nombre: 'Fernando',
		// };
		// res.write(JSON.stringify(persona));
		res.write('hola mundo');
		res.end();
	})

	.listen(8080);

console.log('escuchando en puerto', 8080);
