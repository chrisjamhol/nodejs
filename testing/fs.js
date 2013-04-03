var fs = require("fs");
console.log("Starting");

//------> reading / parsing
	//async
/*fs.readFile("sample.txt",function(error,data){
	console.log("cont: "+data);
});*/
	//sync
/*var content = fs.readFileSync("fsconfig.json");
console.log("cont"+content);
var config = JSON.parse(content);
console.log(config.username);*/

//-------> writing
	//sync
//fs.writeFileSync("new.txt","hello you :)");
	//async
/*fs.writeFile("new.txt","hello you :)",function(error){
	console.log("finished");
});*/

//------> watch
var config = JSON.parse(fs.readFileSync("fsconfig.json"));
fs.watchFile("fsconfig.json",function(current, previous){
	console.log("changed");
	config = JSON.parse(fs.readFileSync("fsconfig.json"));
	console.log("new config: ",config);
});