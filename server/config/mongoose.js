var mongoose = require('mongoose');
    // encrypt = require('../utilities/encryption');

module.exports = function (config){
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.log.bind(console, 'Connection error...'));
  db.once('open', function callback() {
    console.log('mvision db opened');
  });

  var userSchema = mongoose.Schema({
      firstName: String, 
      lastName: String, 
      username: String
  }); 

  var User = mongoose.model('User', userSchema);  // create a user model based upon the userSchema

  User.find({}).exec(function  (err, collection) {
    if( collection.length === 0 ){
      User.create({firstName:'Joe', lastName: 'Eames', username: 'joe'}); 
      User.create({firstName:'John', lastName: 'Papa', username: 'john'}); 
      User.create({firstName:'Dan', lastName: 'Wahlin', username: 'dan'}); 
    }
  })


};
