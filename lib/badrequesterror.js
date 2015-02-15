var util = require('util');

function BadRequestError(name, message) {
    Error.call(this);
    Error.captureStackTrace(this, arguments.callee);
    this.name = name || 'authorizationError';
    this.message = message || null;
}

util.inherits(BadRequestError, Error);

module.exports = BadRequestError;
