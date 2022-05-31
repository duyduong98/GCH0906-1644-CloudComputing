var http = require('http');
var fs  = require('fs')
var server = http.createServer(function(req, res){
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write("<html><body>")
        res.write("<button type='button'>Home page</button>")
        res.write("<button type='button'>2nd page</button>")
        res.write("<button type='button'>3rd page</button>")
        res.write("</body></html>")
        res.end();
    }
    else if (req.url == '/2ndpage'){
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        fs.readFile('datahtml2.txt', 'utf-8', function(err, data){
            res.write(data)
            res.end()
        })
    }
    else if (req.url == '/3rdpage'){
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        fs.readFile('datahtml3.txt', 'utf-8', function(err, data){
            res.write(data)
            res.end()
        })
    }
   
   
});
server.listen(8080);
console.log("Server is running");