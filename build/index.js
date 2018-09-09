'use strict';
/**
 * Author : Parshant Nagpal
 * Description: Project start
 * file Name: index.js
 */

'use-strict';

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _server2.default)();

(0, _db2.default)();