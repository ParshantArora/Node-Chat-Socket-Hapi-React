/*
Author : Parshant Nagpal
Description: Create Database Connection
fileName : db.js
*/

import Mongoose from 'mongoose';

export default () => {
    Mongoose.connect('mongodb://localhost/NodeHapiSocketChatReact');
    var db = Mongoose.connection;
    db.on('error',console.error.bind(console,'Connection Error'));
    db.once('open',()=>{
        console.log('connectiion successfull');
    });
}