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