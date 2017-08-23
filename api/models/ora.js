'use strict';

var oracledb = require('oracledb'),
    dbarg    = require('./dbarg');
oracledb.autoCommit = true;
module.exports = oracledb.getConnection(dbarg.conf);
