const path = require('path');

const storageConfig = require('./storageConfig.json');

const { MESSAGES } = require(path.join(__dirname, storageConfig.errors));

const fs = require('fs').promises;

const usersFile = path.join(__dirname, storageConfig.usersFile);

const subsFile = path.join(__dirname, storageConfig.subscribers);

const ordersFile = path.join(__dirname, storageConfig.orders);

const messagesFile = path.join(__dirname, storageConfig.messages);

//Reading File System

const read = async (fileToRead) => {
	try {
		const storage = await fs.readFile(fileToRead, 'utf8');
		return JSON.parse(storage) || [];
	} catch (err) {
		console.error(err);
		return [];
	}
};

//Writing File System

const write = async (fileToWrite, data) => {
	try {
		await fs.writeFile(fileToWrite, JSON.stringify(data, null, 4));
		return MESSAGES.WRITE_OK;
	} catch (err) {
		return MESSAGES.WRITE_ERROR(err.message);
	}
};

//Signing In

const getUser = async (email, password) => {
	return (await read(usersFile)).find((user) => user.email === email && user.password === password) || false;
};

//Registration

const insertUser = async (newUser) => {
	const storage = await read(usersFile);
	if (storage.find((user) => user.email === newUser.email)) {
		return false;
	} else {
		storage.push({
			id: +storage.length + 1,
			name: newUser.name,
			email: newUser.email,
			password: newUser.password,
			status: newUser.status,
		});
		await write(usersFile, storage);
		return true;
	}
};

//Password Update

const updatePassword = async (userEmail, oldPassword, newPassword) => {
	const storage = await read(usersFile);
	const oldVer = storage.find((user) => user.email === userEmail);
	if (oldVer.password === oldPassword) {
		oldVer.password = newPassword;
		await write(usersFile, storage);
		return true;
	} else {
		return false;
	}
};

//Subscribing

const subscription = async (email) => {
	const storage = await read(subsFile);
	if (storage.find((oldEmail) => oldEmail === email)) {
		return false;
	} else {
		storage.push(email);
		await write(subsFile, storage);
		return true;
	}
};

//Receiving a message

const messageReceiving = async (messageObj) => {
	const storage = await read(messagesFile);

	storage.push({
		name: messageObj.name,
		email: messageObj.email,
		message: messageObj.message,
	});
	await write(messagesFile, storage);
	return true;
};

//Receiving an order

const orderReceiving = async (orderObj) => {
	const storage = await read(ordersFile);

	storage.push({
		name: orderObj.name,
		email: orderObj.email,
		item: orderObj.item,
		size: orderObj.size,
	});
	await write(ordersFile, storage);
	return true;
};

module.exports = {
	getUser,
	insertUser,
	updatePassword,
	subscription,
	messageReceiving,
	orderReceiving,
};
