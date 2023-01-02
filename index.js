const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    // first parameter = response code 200 (means it worked)
    // second parameter = specifies to the browser what type of content
    fs.readFile('index.html', function(error, data) {
    // fs = file system
        if (error) {
            res.writeHead(404)
            res.write('Error: 404')
        } else {
            res.write(data)
        }
        res.end()  
    })
}) 

server.listen(port, function(error) {
    if (error) {
        console.log('ERROR', error)
    } else {
        console.log('listening on port' + port)
    }
})