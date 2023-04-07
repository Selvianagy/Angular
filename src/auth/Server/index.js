
var express=require('express')
var app=express();
const mainfile = require("./function");
const cors= require('cors');

var port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set('view engine', 'ejs');
app.use(cors());

app.get('/',function(req,res){
    res.send("hello from node server")
})

app.post('/login', function(req, res) {
    var result= mainfile.check(req.body);
    res.status(200).send(result);
    
});
app.post('/Registered', function(req, res) {
    var data=mainfile.add(req.body)
    res.status(200).send(data);
    
}); 
app.listen(port,function(){
    console.log("Server running on port "+port);
});