'use strict';

var sinon = require('sinon');
var logger = require('logger-facade-nodejs');
var loggerStub = { debug: function() {} };
var logStub = sinon.stub(logger, 'getLogger').returns(loggerStub);

after(function () {
  logStub.restore();
});

module.exports = {logger: loggerStub};
