# Logger Facade Mongoose

[![Build Status](https://travis-ci.org/micro-toolkit/logger-facade-mongoose.svg?branch=master)](https://travis-ci.org/micro-toolkit/logger-facade-mongoose)

A helper library to hook logger facade library in [mongoose](https://www.npmjs.com/package/mongoose).

# How to use it

Install it:

```
npm install logger-facade-nodejs
npm install logger-facade-mongoose
```

Attach it:

```
// check logger facade node and plugins for other plugins information
var mongooseLogger = require('logger-facade-mongoose');
mongoose.set('debug', mongooseLogger);
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
## Running Specs

    $ npm test
