var MongoClient  = require('mongodb');
var config = require('./config');



exports.ConnectDb = function(cb) {

  //console.log("courseid: "+courseid);

  var url = config.dbconstring;
  // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
   // assert.equal(null, err);
    console.log("Connected to server");
    //db.close();
    cb(db);
  });

};
