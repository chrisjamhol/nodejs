var mongo = require("mongodb");
var host = "127.0.0.1";
var port = mongo.Connection.DEFAULT_PORT;
var db = new mongo.Db("nodejs-intro", new mongo.Server(host,port, {}),{safe:true});
db.open(function(error){
	getUser(1,function(user){
		console.log(user);
		if(user){
			console.log("user: ",user);
		}else{console.log("no user found-> id: 1");}
	});
	getUser(5,function(user){
		console.log(user);
		if(user){
			console.log("user: ",user);
		}else{console.log("no user found-> id: 5");}
	});

	/*coll.insert({
					id:1,
					name: "chris",
					twitter:"chrisjamhol",
					email: "chrisjamhol@gmail.com"
			},function(){
				console.log("insertet chris");
			});*/
});

function getUser(id,callback)
{
	console.log("conn succ "+id.toString());
		db.collection("user",function(error,coll){
			coll.find({},function(error,cursor){
				cursor.toArray(function(error,users){
					console.log(users);
				});
			});
			coll.find({"id":"1"},function(error,cursor){
				cursor.toArray(function(error,users){
					console.log(error);
					console.log("l: "+users.length);
					if(users.length == 0){callback(false);}
					else{callback(users[0]);}
				});
			});
		});
}