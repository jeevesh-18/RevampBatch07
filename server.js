const http = require("http");
const Server = http.createServer((req,res) =>{
	res.write("Hello from basic node app");
	res.end();
});

Server.listen(3000,()=>{
	console.log("server is running on port 3000");
});	
