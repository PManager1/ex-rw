var mongoose = require('mongoose');
    // encrypt = require('../utilities/encryption');

module.exports = function (config){
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.log.bind(console, 'Connection error...'));
  db.once('open', function callback() {
    console.log('mvision db opened');
  });
};
