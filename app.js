const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Ujjwal");
    res.setHeader('Content-type', 'text/html')
    const url = req.url
    if(url === '/home')
    {
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Welcome Home!</h1></body>')
        res.write('</html>')
    }
    if(url === '/about')
    {
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Welcome to about us Page</h1></body>')
        res.write('</html>')
    }
    if(url==="/node")
    {
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Hello from Node.js!</h1></body>')
        res.write('</html>')
    }
    
    res.end();
});

server.listen(5000);
