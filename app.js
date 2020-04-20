const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function(){console.log("Listening on port 3000")});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
    var campoBusca = req.body.campoBusca;

    console.log(campoBusca);
});

app.post("/cadastro", function (req, res) {
    
    var estabelecimento = req.body.estabelecimento;
    var ramo = req.body.ramo;
    var cidade = req.body.listaCidades;
    var telefone = req.body.telefone;

    var dadosCadastro = {
        estabelecimento,
        ramo,
        cidade,
        telefone
    }

    

    console.log(dadosCadastro);
});