'use strict';

var oracledb = require('oracledb'),
    dbarg    = require('./dbarg');
oracledb.autoCommit = true;
oracledb.outFormat = oracledb.OBJECT;

module.exports = oracledb.getConnection(dbarg.conf);
