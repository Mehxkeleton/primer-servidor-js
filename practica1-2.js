const http = require("http");
const fs = require("fs");

exports.init= () =>{
	/*function onRequest(request, response){
		response.writeHead(200, {"Content-Type":"text/html"});
		response.write("<h1>Hello World</h1>");
		response.end();
	}*/

	http.createServer((request, response)=>{
		fs.readFile("./index.html", (err, obj) =>{
			if (err){
				response.writeHead(404, {"Content-Type":"text/html"});
				response.write("error archivo no encontrado");
			}else{
				response.writeHead(200, {"Content-Type":"text/html"});
				response.write(obj);
			}
			response.end();
		});
	}).listen(8008);
	//http.createServer(onRequest).listen(8008);
}

//init();
//exports.init=init;
