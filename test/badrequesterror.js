var BadRequestError = require('../lib/badrequesterror');
var expect = require('chai').expect;

describe('BadRequestError', function () {
  it('should construct a valid error with stack trace and name', function () {
    var error = new BadRequestError();

    expect(error.stack).to.exist;
    expect(error.name).to.equal('authorizationError');
  });

  it('should construct a bad request error with name and message passed', function () {
    var error = new BadRequestError('errorName', 'errorMessage');

    expect(error.name).to.equal('errorName');
    expect(error.message).to.equal('errorMessage');
  });

  it('should construct a bad request error with null message if no message was passed', function () {
    var error = new BadRequestError();

    expect(error.message).to.equal(null);
  });
});