var express = require('express');
var util = require('./utildb');
var app = express();


var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
	
	util.ConnectDb(function(obj_db) { 
     var collection = obj_db.collection('curriculum');
		

		var myCursor = collection.find();
		
		 myCursor.each(function(err,doc){
			 
			
			 if(doc!=null){
				  console.log("collection="+doc.number);
			 }
		 
		}); 

		
         //console.log("collection="+collection.count());


      
      obj_db.close();
    }); 
	
    res.send('<h1>Hello Node.js </h1>');
	
});

app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
	
	
});