import http from "http";

http.createServer((req, res)=>{
    res.write("Hello World!");
    (console.log(`App is listening on : http://localhost:3004/`))
    res.end()
  
}).listen(3004)