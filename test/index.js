var helper = require('./support/logger_helper');
var util = require('util');
var sinon = require('sinon');
var chai = require('chai');
var sinonChai = require('sinon-chai');

var log = require('../index');

chai.should();
chai.use(sinonChai);

describe('log', function () {
  var defaultParams;
  var logger;
  var spy;

  before(function () {
    logger = helper.logger;
    spy = sinon.stub(logger, 'debug');
    defaultParams = {
      coll: 'provider',
      method: 'find',
      query: {},
      doc: {
        skip: 0,
        limit: 10
      },
      options: {}
    };
  });

  after(function () {
    logger.debug.restore();
  });

  it('should format message', function () {
    var expectedMsg = util.format('db.%s.%s(%s, %s)',
                                  defaultParams.coll,
                                  defaultParams.method,
                                  JSON.stringify(defaultParams.query),
                                  JSON.stringify(defaultParams.options));
    log(defaultParams.coll,
        defaultParams.method,
        defaultParams.query,
        defaultParams.doc,
        defaultParams.options);
    spy.should.have.been.calledWith(defaultParams, expectedMsg);
  });

  it('should return an empty object if options are not passed', function () {
     var expectedMsg = util.format('db.%s.%s(%s, %s)',
                                  defaultParams.coll,
                                  defaultParams.method,
                                  JSON.stringify(defaultParams.query),
                                  JSON.stringify({}));
    log(defaultParams.coll,
        defaultParams.method,
        defaultParams.query,
        defaultParams.doc);
    spy.should.have.been.calledWith(defaultParams, expectedMsg);
  });
});

