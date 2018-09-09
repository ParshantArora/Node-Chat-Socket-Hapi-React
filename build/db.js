'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    _mongoose2.default.connect('mongodb://localhost/NodeHapiSocketChatReact');
    var db = _mongoose2.default.connection;
    db.on('error', console.error.bind(console, 'Connection Error'));
    db.once('open', function () {
        console.log('connectiion successfull');
    });
}; /*
   Author : Parshant Nagpal
   Description: Create Database Connection
   fileName : db.js
   */