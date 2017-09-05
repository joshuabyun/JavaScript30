//var http = require('http');
//http.createServer(function(request,response){
//    response.writeHead(200);
//    response.write("hello");
//    response.end();
//}).listen(8080,function(){
//          console.log('listening on port 8080');
//          });
var http = require('http'),
    fs = require('fs');


fs.readFile('index-START.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000,function(){
        console.log('listening to port 8000');
    });
});