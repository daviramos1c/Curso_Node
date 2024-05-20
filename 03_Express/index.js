const express = require('express')
const app = express()

app.get('/blog',function(req,res){
    res.send('Blog da etec')
})
app.get('/sobre',function(req,res){
    res.send('Sobre ETEC MCM')
})
app.get('/cadastro/:nome/:idade',function(req,res){
    res.send('Ola '+req.params.nome+ ' sua idade é '+req.params.idade)
    //res.send('Sua idade: '+req.params.idade)
    //res.send(req.params)
})


app.listen(8081,function(){
    console.log('salinha on em http://http://localhost:8081/ ')
})