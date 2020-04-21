const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(process.env.PORT || 3000, function(){console.log("Listening on port 3000")});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});


//Rotas
app.post("/", function(req, res){
    var campoBusca = req.body.campoBusca;

    console.log(campoBusca); //retirar em versão final
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

    var dadosJsonStringfy = JSON.stringify(dadosCadastro);
    

    console.log(dadosJsonStringfy); //retirar em versão final
});