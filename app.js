//Requiring dependencies
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

//Dependencies settings
app.use(express.static("public"));
const schema = mongoose.Schema;
app.use(bodyParser.urlencoded({
    extended: true
}));

//Opening server
app.listen(process.env.PORT || 3000, function () {
    console.log("Listening on port 3000");
});


//Mongoose (MongoDB) Set up

function startServer() {
    mongoose.connect('mongodb+srv://marcio:WfPtgB1NNVVENg9l@cluster0-rtrkq.gcp.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

const fornecedorSchema = new schema({
    name: String,
    ramo: String,
    cidade: String,
    telefone: Number,
    descricao: String
});

const fornecedor = mongoose.model('Fornecedor', fornecedorSchema);






//ROUTES
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});


app.post("/", function (req, res) {
    let campoBusca = req.body.campoBusca;

    console.log(campoBusca); //retirar em versão final
});

app.post("/cadastro", function (req, res) {

    let getName = req.body.formName;
    let getCategory = req.body.formCategory;
    let getCity = req.body.formCity;
    let getTelephone = req.body.formTelephone;
    let getDescription = req.body.formDescription;

    startServer();

    const newFornecedor = new fornecedor({
        name: getName,
        ramo: getCategory,
        cidade: getCity,
        telefone: getTelephone,
        descricao: getDescription
    });

    newFornecedor.save(err => {if (err) return err});

    console.log(newFornecedor); //retirar em versão final
});
