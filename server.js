const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));

//ROUTES
app.get('/', (request, response) => {
    response.render('index');
});

app.get('/cats',(request,response) =>{
    var catsarr = [
        {name: "Luna"}, 
        {name1: "Happy"}, 
        {name2: "Beerus"}, 
    ];
    response.render('cats', {cats : catsarr})
})

app.get('/detail/luna',(request,response) =>{
    var catsarr = [
        {name: "Luna", favoriteFood:"ice cream" , age: "20"}, 
    ];
    response.render('details', {cats : catsarr})
})

app.get('/detail/happy',(request,response) =>{
    var catsarr = [
        {name: "Happy", favoriteFood:"fish" , age: "6"}, 

    ];
    response.render('details', {cats : catsarr})
})

app.get('/detail/beerus',(request,response) =>{
    var catsarr = [
        {name: "Luna", favoriteFood:"Gourmet" , age: "739"}, 

    ];
    response.render('details', {cats : catsarr})
})



app.listen(8000, () => console.log("listening on port 8000"));
