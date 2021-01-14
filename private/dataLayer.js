const path = require('path');
const storageConfig = require('./storageConfig.json');

const { MESSAGES } = require(path.join(__dirname, storageConfig.errors));

const { getUser, insertUser, updatePassword, subscription, messageReceiving, orderReceiving } = require(path.join(
	__dirname,
	storageConfig.privateAPI
));

class Data {
	constructor() {}

	get(email, password) {
		return new Promise(async (resolve, reject) => {
			if (!email || !password) {
				reject(MESSAGES.NOT_FOUND('empty query'));
			} else {
				const result = await getUser(email, password);
				// resolve(result);
				if (result) {
					resolve([MESSAGES.FOUND(), result]);
				} else {
					reject(MESSAGES.NOT_FOUND(email));
				}
			}
		});
	}

	insert(user) {
		return new Promise(async (resolve, reject) => {
			if (!(user.name && user.email && user.password && user.status)) {
				reject(MESSAGES.NOT_INSERTED());
			} else {
				const result = await insertUser(user);
				if (result) {
					resolve(MESSAGES.INSERT_OK(user.email));
				} else {
					reject(MESSAGES.ALREADY_IN_USE(user.email));
				}
			}
		});
	}

	update(email, oldPassword, newPassword) {
		return new Promise(async (resolve, reject) => {
			if (!(email && oldPassword && newPassword)) {
				reject(MESSAGES.NOT_UPDATED());
			} else {
				if (await updatePassword(email, oldPassword, newPassword)) {
					resolve(MESSAGES.UPDATE_OK());
				} else {
					reject(MESSAGES.NOT_UPDATED());
				}
			}
		});
	}

	receiving(obj) {
		switch (obj.type) {
			case 'message': {
				return new Promise(async (resolve, reject) => {
					if (!(obj.email && obj.name && obj.message)) {
						reject(MESSAGES.NOT_RECEIVED(obj.type));
					} else {
						if (await messageReceiving(obj)) {
							resolve(MESSAGES.RECEIVED(obj.type));
						} else {
							reject(MESSAGES.NOT_RECEIVED(obj.type));
						}
					}
				});
			}
			case 'order': {
				return new Promise(async (resolve, reject) => {
					if (!(obj.email && obj.name && obj.item && obj.size)) {
						reject(MESSAGES.NOT_RECEIVED(obj.type));
					} else {
						if (await orderReceiving(obj)) {
							resolve(MESSAGES.RECEIVED(obj.type));
						} else {
							reject(MESSAGES.NOT_RECEIVED(obj.type));
						}
					}
				});
			}
			case 'sub': {
				return new Promise(async (resolve, reject) => {
					if (!obj.email) {
						reject(MESSAGES.NOT_SUBSCRIPTED());
					} else {
						const result = await subscription(obj.email);
						if (result) {
							resolve(MESSAGES.SUBSCRIPTION());
						} else {
							reject(MESSAGES.SUBSCRIPTION_IN_USE());
						}
					}
				});
			}
		}
	}
}

module.exports = {
	Data,
};
