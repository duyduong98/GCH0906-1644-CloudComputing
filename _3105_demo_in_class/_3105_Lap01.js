var http = require('http');
var fs  = require('fs')
var server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    res.write("<html><body>")
    res.write('<h1>Hello Friend</h1>')
    res.write('<ul>')
    fs.readFile("data.txt", 'utf-8', (err, data) => {
        var sliptName = data.split(';')
        for (i = 0; i < sliptName.length; i++) {
            res.write('<li>' + sliptName[i] + '</li>')
        }
        res.write('</ul>')
        res.write('</body></html>')
        res.end();
    })
    
    
});
server.listen(8080);
console.log("Server is running");