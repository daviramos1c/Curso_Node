//Selecionar o módulo http do node
var http = require('http')

//Abrir um sevidor http
http.createServer(function(req, res){
    res.end('<b>O dia que um dos drake perde pra spin vai virar mochilinha pra dar refletida')
}).listen(8081)

console.log('Servidor salvando...')
