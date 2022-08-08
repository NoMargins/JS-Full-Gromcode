'use strict';

/**
 * @return {object}
 */

export const createLogger = (someType) => {
	let allRecords = [];

	let messageMain = {
		message: '${message text}',
		dateTime: new Date(),
		type: '${message type}',
	};

	function warn(messageWarn) {
		messageMain.type = 'warn';
		messageMain.message = messageWarn;
		const logMesage = {
			...messageMain,
		};
		allRecords.unshift(logMesage);
	}

	function error(messageError) {
		messageMain.type = 'error';
		messageMain.message = messageError;
		const logMesage = {
			...messageMain,
		};
		allRecords.unshift(logMesage);
	}

	function log(messageLog) {
		messageMain.type = 'log';
		messageMain.message = messageLog;
		const logMesage = {
			...messageMain,
		};
		allRecords.unshift(logMesage);
	}

	function getRecords(messageType) {
		if (typeof messageType === 'undefined') {
			return allRecords.sort((a, b) => b.dateTime - a.dateTime);
		}
		return allRecords.filter((a) => a.type === messageType);
	}

	return {
		warn,
		error,
		log,
		getRecords,
	};
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('log')); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('error')); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger1.getRecords('warn')); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
logger2.getRecords('error'); // ===> []
logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
logger3.getRecords('error'); // ===> []
logger3.getRecords(); // ===> []
