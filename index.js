var log = require('llog');

module.exports = function () {
  process.on('uncaughtException', function handleUncaughtException(err) {
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

  process.on('unhandledRejection', function handleUnhandledRejection(err) {
    log.fatal('unhandledRejection');
    throw err;
  });

  process.on('SIGINT', function handleSigint() {
    throw new Error('SIGINT');
  });

  process.on('SIGTERM', function handleSigterm() {
    throw new Error('SIGTERM');
  });

  process.on('SIGHUP', function handleSighup() {
    throw new Error('SIGHUP');
  });
};
