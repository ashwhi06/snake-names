let http = require('http');
let server = http.createServer(function(req, res) { //callback function runs when user visits server
    res.write("<h1 style='color:blue'>Hello There</h1>") //response that will appear in the web browser
    res.end()
})

server.listen(3000, function() { //listens to port 3000
    console.log('Server is running on port 3000')
})