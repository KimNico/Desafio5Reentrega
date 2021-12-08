const { Router } = require("express");
let express= require("express");
let app = express();
const PORT = 8080;
let path= require("path");

let router1= new Router;

let productos=[];

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set("views", path.join(__dirname,"views", "ejs"))
app.set("view engine","ejs")

router1.get("/",(req,res,next)=>{
    console.log(req.query);
    res.render("index",{productos});
});

router1.post("/",(req,res,next)=>{
    productos.push(req.body)
    console.log(req.body);
    res.redirect("/");
});
app.use("/",router1);

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})

