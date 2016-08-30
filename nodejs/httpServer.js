var http = require('http');

http.createServer(function(req,res){
		res.writeHead(200,{'Content-type':'text/plain'});
    res.end('hello world');

	
}).listen(8888);
console.log('Server running at http://localhost:8888/');
