/*
The party's chocolate fountain stations need maintenance, but 
something's wrong with the logging system!

The Yeti set up loggers for each chocolate machine 
("Dark Chocolate", "Milk Chocolate", "White Chocolate"), 
but when checking the logs, Yeti can't tell which machine is 
reporting errors.

Fix the Logger class so the logs properly identify which 
chocolate machine needs attention!
*/

class Logger {
  constructor(loggerName) {
    this.loggerName = loggerName;
    this.logs = [];
    this.log = this.log.bind(this);
  }

  log(message) {
    const formattedMessage = `[${this.loggerName}]: ${message}`;
    console.log(formattedMessage);
    this.logs.push(formattedMessage);
  }
}

// No need to change this function
function createLogger(loggerName) {
  return new Logger(loggerName);
}
