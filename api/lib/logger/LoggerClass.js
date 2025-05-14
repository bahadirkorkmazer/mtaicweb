const logger = require("./logger");
let instance = null;

class LoggerClass {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  #createLogObject(email, location, proc_type, log) {
    return {
      email,
      location,
      proc_type,
      log
    };
  }

  info(email, location, proc_type, log) {
    let logObj = this.#createLogObject(email, location, proc_type, log);
    logger.info(logObj);
  }

  warn(email, location, proc_type, log) {
    let logObj = this.#createLogObject(email, location, proc_type, log);
    logger.warn(logObj);
  }

  error(email, location, proc_type, log) {
    let logObj = this.#createLogObject(email, location, proc_type, log);
    logger.error(logObj);
  }

  verbose(email, location, proc_type, log) {
    let logObj = this.#createLogObject(email, location, proc_type, log);
    logger.verbose(logObj);
  }

  silly(email, location, proc_type, log) {
    let logObj = this.#createLogObject(email, location, proc_type, log);
    logger.silly(logObj);
  }

  http(email, location, proc_type, log) {
    let logObj = this.#createLogObject(email, location, proc_type, log);
    logger.http(logObj);
  }

  debug(email, location, proc_type, log) {
    let logObj = this.#createLogObject(email, location, proc_type, log);
    logger.debug(logObj);
  }
}

module.exports = new LoggerClass();
