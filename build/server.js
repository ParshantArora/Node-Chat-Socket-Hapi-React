'use strict';

Object.defineProperty(exports, "__esModule", {
     value: true
});

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                           Author : Parshant Nagpal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                           Desciption : all plugin register here and start the server
                                                                                                                                                                                                                                                                                                                                                                                                                                                                           File : server.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */


exports.default = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
     var server;
     return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
               switch (_context.prev = _context.next) {
                    case 0:
                         server = _hapi2.default.server({
                              host: 'localhost',
                              port: 4000
                         });
                         _context.prev = 1;
                         _context.next = 4;
                         return server.start();

                    case 4:
                         _context.next = 10;
                         break;

                    case 6:
                         _context.prev = 6;
                         _context.t0 = _context['catch'](1);

                         console.log(_context.t0);
                         process.exit(1);

                    case 10:
                         console.log('server is running at ', server.info.uri);

                    case 11:
                    case 'end':
                         return _context.stop();
               }
          }
     }, _callee, undefined, [[1, 6]]);
}));