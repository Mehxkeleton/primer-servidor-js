const http = require("http");
const fs = require("fs");

exports.init= () =>{
	/*function onRequest(request, response){
		response.writeHead(200, {"Content-Type":"text/html"});
		response.write("<h1>Hello World</h1>");
		response.end();
	}*/
	const html = fs.readFileSync("./index.html");
	
	http.createServer((request, response)=>{
		response.writeHead(200, {"Content-Type":"text/html"});
		response.write(html);
		response.end();
	}).listen(8008);
	//http.createServer(onRequest).listen(8008);
}

//init();
//exports.init=init;
