const fs = require('fs').promises;
const http = require('http');
const path = require('path');
const express = require('express');

const { host, storage } = require('./serverConfig.json');
const PORT = process.env.PORT || 5000;
const { Data } = require(path.join(__dirname, storage.storageFolder, storage.dataLayer));
const items = require(path.join(__dirname, storage.db));

const Storage = new Data();
const app = express();

const server = http.createServer(app);

// app.use(function (req, res, next) {
// 	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
// 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// 	res.setHeader('Access-Control-Allow-Headers', '*');
// 	res.setHeader('Access-Control-Allow-Credentials', true);

// 	next();
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/api/insert', (req, res) => {
	if (!req.body) res.sendStatus(500);
	const newCustomer = req.body;
	Storage.insert(newCustomer)
		.then((result) => {
			console.log(result);
			res.json({ message: result.message, code: result.code, type: result.type });
		})
		.catch((err) => {
			res.json({ message: err.message, code: err.code, type: err.type });
		});
});

app.post('/api/getUser', (req, res) => {
	if (!req.body) res.sendStatus(500);
	const emailToFind = req.body.email;
	const passwordToCheck = req.body.password;
	Storage.get(emailToFind, passwordToCheck)
		.then((result) => {
			console.log(result);
			res.json({
				email: result[1].email,
				name: result[1].name,
				status: result[1].status,
				message: result[0].message,
				code: result[0].code,
				type: result[0].type,
			});
		})
		.catch((err) => res.json({ message: err.message, code: err.code, type: err.type }));
});

app.post('/api/updatePassword', (req, res) => {
	if (!req.body) res.sendStatus(500);
	Storage.update(req.body.email, req.body.old, req.body.new)
		.then((result) => {
			console.log(result);
			res.json({ message: result.message, code: result.code, type: result.type });
		})
		.catch((err) => res.json({ message: err.message, code: err.code, type: err.type }));
});

app.post('/api/sending', (req, res) => {
	if (!req.body) res.sendStatus(500);
	const obj = req.body;
	Storage.receiving(obj)
		.then((result) => {
			console.log(result);
			res.json({ message: result.message, code: result.code, type: result.type });
		})
		.catch((err) => {
			res.json({ message: err.message, code: err.code, type: err.type });
		});
});

app.get('/api/db', (req, res) => {
	res.json(items);
});

app.get('/api/db/:item', (req, res) => {
	res.json(items[req.params.item - 1]);
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

server.listen(PORT, '0.0.0.0', () => console.log(`server ${host}:${PORT} is serving`));
//server.listen(PORT, host, () => console.log(`server ${host}:${PORT} is serving`));
