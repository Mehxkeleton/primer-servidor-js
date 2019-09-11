const http = require("http");

function init(){
	function onRequest(request, response){
		response.writeHead(200, {"Content-Type":"text/html"});
		response.write("<h1>Hello World</h1>");
		response.end();
	}
	
	http.createServer(onRequest).listen(8008);
}

init();
//exports.init=init;
