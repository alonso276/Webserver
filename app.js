const express = require('express');
// handlebars partials
const hbs = require('hbs');

//DOTENV
require('dotenv').config();
const app = express();
//dotenv II
const port = process.env.PORT;

//? telling express we're going to use handlebars
app.set('view engine', 'hbs');
// handlebars partials
hbs.registerPartials(__dirname + '/views/partials');

//? middleware para que la app vaya directamente a mi contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home', {
		nombre: ' Lidia Alonso',
		titulo: 'Curso de node',
	});
});

app.get('/generic', (req, res) => {
	res.render('generic', {
		nombre: ' Lidia Alonso',
		titulo: 'Curso de node',
	});
});

app.get('/elements', (req, res) => {
	res.render('elements', {
		nombre: ' Lidia Alonso',
		titulo: 'Curso de node',
	});
});

//error
app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});
