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

    process.abort(1);
  });

  process.on('unhandledRejection', function handleUnhandledRejection(err) {
    log.fatal('unhandledRejection');
    throw err;
  });

};
