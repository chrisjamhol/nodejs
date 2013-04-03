var http = require("http");
console.log("Starting");
var fs = require("fs");
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;

var server = http.createServer(function(request,response){
	console.log("received request: "+request.url);
	fs.readFile("./"+request.url,function(error,data){
		if(error)
		{
			response.writeHeader(404,{"Content-type":"text/plain"});
			response.end("Sorry page not found");
		}
		else
		{
			response.writeHeader(202,{"Content-type":"text/plain"});
			response.end(data);
		}
	});
});

server.listen(port,host,function(){
	console.log("listinging: "+host+":"+port);
});

fs.watchFile("config.json",function(){
	config = JSON.parse(fs.readFileSync("config.json"));
	server.close();
	server.listen(config.port,config.host,function(){
		console.log("now listinging: "+config.host+":"+config.port);
	});
});