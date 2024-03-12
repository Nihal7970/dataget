const express=require("express");
const app= express();
const path = require('path'); 
port =8080;
app.use(express.urlencoded({extended:true}));

app.set("viewengine","ejs");

app.set('views', path.join(__dirname, 'views'));
app.set(express.static(path.join(__dirname,"public")));



    let posts = [
        {
            "username": "nihal",
            "class": "third"
        },
        {
            "username": "shanu",
            "class": "eigth"
        },
        {
            "username": "shdghs",
            "class": "hfh"
        }
    ];
    





app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts:posts})
})




app.listen(port ,()=>{
    console.log(`your port num is ${port}`)});