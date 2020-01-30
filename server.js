var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "mainFiles/";
/*
The http.createServer() method turns your computer into an HTTP server.

The http.createServer() method creates an HTTP Server object.

The HTTP Server object can listen to ports on your computer and execute
a function, a requestListener, each time a request is made.
 */
http.createServer(function (req, res) {
    console.log(req.headers);
    console.log(req.url);
    /*Parse the request URL*/
    var urlObj = url.parse(req.url, true, false);
    /*
    Read the file at ./html/[pathname]
     */
    fs.readFile(ROOT_DIR + urlObj.pathname, function (err,data) {
        /*
        If error reading (or finding) the file
         */
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            //res.write("/404.html");
            return;
        }
        /*
        Return the contents of the file
         */
        res.writeHead(200);
        res.end(data);
    });
}).listen(8080);



var options = {
    hostname: 'localhost',
    port: '8080',
    path: '/html/index.html'
};