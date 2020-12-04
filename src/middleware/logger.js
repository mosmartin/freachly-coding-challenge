const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const { combine, timestamp, label, prettyPrint } = format;

const transport = new transports.DailyRotateFile({
  filename: 'freachly-server-%DATE%.log',
  dirname: './logs',
  // frequency: '1m',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  auditFile: 'log-audit.json',
});

transport.on('rotate', function (oldFilename, newFilename) {
  // do something fun
});

const logger = createLogger({
  level: 'silly',
  format: combine(label({ label: 'freachly-app' }), timestamp(), prettyPrint()),
  defaultMeta: { service: 'freachly-martin-challenge-server' },
  transports: [transport],
});

module.exports = logger;
