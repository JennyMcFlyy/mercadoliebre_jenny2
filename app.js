const express =  require ("express");

const app = express ();

const path = require ("path");

app.listen(process.env.PORT || 3050, function ()  {
    console.log ("Levantando servidor http://localhost:3050");
})

const publicFolder = path.resolve (__dirname, "./public");
app.use(express.static(publicFolder));


app.get("/", function (req, res){
    res.sendFile (path.resolve (__dirname, "./views/home.html"))
});

app.get("/register.html", function (req, res){
    res.sendFile (path.resolve (__dirname, "./views/register.html"))
});

app.get("/login.html", function (req, res){
    res.sendFile (path.resolve (__dirname, "./views/login.html"))
});

app.get("/mi_cuenta/", function (req, res){
    res.sendFile (path.join (__dirname, "./views/ingresa.html"))
});

app.get("mis_compras", function (req, res){
    res.sendFile (path.join (__dirname, "./views/mis_compras.html"))
});

app.get("/ayuda", function (req, res){
    res.sendFile (path.join (__dirname, "./views/ayuda.html"))
});

app.get("/ofertas", function (req, res){
    res.sendFile (path.join (__dirname, "./views/ofertas.html"))
});

app.get("/tiendas_oficiales", function (req, res){
    res.sendFile (path.join (__dirname, "./views/tiendas_oficiales.html"))
});

app.get("/vender", function (req, res){
    res.sendFile (path.join (__dirname, "./views/vender.html"))
});



