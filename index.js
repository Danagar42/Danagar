'use strict'

var winston = require('winston')
winston.level = process.env.LOGLEVEL || 'info'
winston.remove(winston.transports.Console)
winston.add(winston.transports.Console, { timestamp: Date.now })

// handle top level exceptions
process.on('uncaughtException', winston.error)

var server = require('./src/server')
var rpc = require('./src/rpc-server')
