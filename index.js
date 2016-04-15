var util = require('util');
var Logger = require('logger-facade-nodejs');
var logger = Logger.getLogger('Mongoose');

function log(coll, method, query, doc, options) {
  var data = {
    coll: coll,
    method: method,
    query: query,
    doc: doc,
    options: options
  };

  var query = JSON.stringify(data.query);
  var options = JSON.stringify(data.options || {});

  var msg = util.format('db.%s.%s(%s, %s)',
                        data.coll,
                        data.method,
                        query,
                        options);
  logger.debug(data, msg);
};

module.exports = log;
