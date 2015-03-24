var log = require('log');

module.exports = function () {
  process.on('uncaughtException', function (err) {
    log.fatal('uncaughtException');

    if (err) {
      if (err.toString) {
        log.fatal(err.toString());
      }

      log.fatal(err.stack || err.message || err);
    } else {
      log.fatal(console.trace());
    }

    throw err;
  });

  process.on('unhandledRejection', function (err) {
    log.fatal('unhandledRejection');
    throw err;
  });

  process.on('SIGINT', function () {
    throw new Error('SIGINT');
  });

  process.on('SIGTERM', function () {
    throw new Error('SIGTERM');
  });

  process.on('SIGHUP', function () {
    throw new Error('SIGHUP');
  });
};
