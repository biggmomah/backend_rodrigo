const log4js = require('log4js');
const path = require('path');
const logger = log4js.getLogger();


log4js.configure({
    appenders: {
        myConsoleLogger: { type: 'console' },
        myWarningLogger: { type: 'file', filename: path.join(__dirname, '../logs/warnings.log') },
        myErrorLogger: { type: 'file', filename: path.join(__dirname, '../logs/error.log') },
    },
    categories: {
        default: { appenders: ['myConsoleLogger'], level: 'debug' },
        loggerInfo: { appenders: ['myConsoleLogger'], level: 'info' },
        loggerWarning: { appenders: ['myConsoleLogger', 'myWarningLogger'], level: 'warn' },
        loggerError: { appenders: ['myConsoleLogger', 'myErrorLogger'], level: 'error' },
    }
})



module.exports = logger