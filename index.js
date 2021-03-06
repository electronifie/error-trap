var log = require('llog');

module.exports = function (options) {
  options = options || {};

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

    // ring system bell
    if (options.ringSystemBellOnAbort) {
      console.log('\u0007');
    }

    process.abort(1);
  });

  process.on('unhandledRejection', function handleUnhandledRejection(err) {
    log.fatal('unhandledRejection');
    throw err;
  });

};
