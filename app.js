const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

app.use(express.static("public"));
const schema = mongoose.Schema;
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

//Set up connection
const LOCAL_PORT = 3000;
app.listen(process.env.PORT || LOCAL_PORT, () => {
	console.log(`Listening on port ${LOCAL_PORT}`);
});

//Mongoose (MongoDB) Set up

function startServer() {
	let mongooseConnectionAddress =
		"mongodb+srv://marcio:WfPtgB1NNVVENg9l@cluster0-rtrkq.gcp.mongodb.net/40tena-delivery?retryWrites=true&w=majority";

	mongoose.connect(
		mongooseConnectionAddress,
		{ useNewUrlParser: true, useUnifiedTopology: true },
		(err) => {
			if (err) console.log(err);
			else console.log("MongoDB connection success");
		}
	);
}

//SCHEMA

const fornecedor_Schema = new mongoose.Schema({
	name: String,
	ramo: String,
	cidade: String,
	telefone: Number,
	descricao: String,
});

//COLLECTION
const Fornecedor = mongoose.model("fornecedores", fornecedor_Schema);

//ROUTES
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/view/index.html");
});

app.post("/", (req, res) => {
	let campoBusca = req.body.campoBusca;
});

app.post("/cadastro", (req, res) => {
	let getName = req.body.formName;
	let getCategory = req.body.formCategory;
	let getCity = req.body.formCity;
	let getTelephone = req.body.formTelephone;
	let getDescription = req.body.formDescription;

	startServer();

	const newFornecedor = new Fornecedor({
		name: getName,
		category: getCategory,
		city: getCity,
		telephone: getTelephone,
		description: getDescription,
	});

	newFornecedor.save((err) => {
		if (err) console.log(err);
	});
});

//Retrieve from database

mongoose.connect(
	"mongodb+srv://marcio:WfPtgB1NNVVENg9l@cluster0-rtrkq.gcp.mongodb.net/40tena-delivery?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true },

	(err) => {
		if (err) console.log(err);
		else console.log("MongoDB connection success");
	}
);

Fornecedor.find((err, fornecedores) => {
	if (err) console.log(err);
	else {
		let fornecedorName = fornecedores[0].name;
		let fornecedorType = fornecedores[0].category;
		let fornecedorCity = fornecedores[0].city;
		let fornecedorTelephone = fornecedores[0].telephone;
		let fornecedorDescription = fornecedores[0].description;
	}
});
