var fs = require("fs");
var config = JSON.parse(fs.readFileSync("expressConf.json"));
var host = config.host;
var port = config.port;
var express = require("express");

var app = express();

app.use(app.router);
app.use(express.static(__dirname+"/public"));

app.get("/",function(request,response){
	response.send("Hello World!");
});

app.get("/hello/:text",function(request,response){
	response.send(request.params.text);
});

app.get("/user/:id",function(request,response){
	var user = users[request.params.id];
	if(user){
		response.send('<a href="http://google.de">'+user.name+'</a>');
	}else{
		response.send("user not found: "+request.params.id,404);
	}
});

app.listen(port,host);

var users = {
			"1" : {
					"name":"User1",
					"twitter":"tUser1"
				  },
			"2" : {
					"name": "User2",
					"twitter": "tUser2"
			}
}