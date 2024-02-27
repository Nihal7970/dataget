const express= require("express");
const path=require("path");
const app=express();
app.use(express.static(path.join(__dirname, '../public')));
  
app.get("/",(req,res)=>{
   res.send("lerning basics of node js");

})
app.get("/about",(req,res)=>{
res.send("this is for about session");
});
app.get("/content",(req,res)=>{
   res.send("this is for content in session");

});
app.listen(3500, () => {
   console.log("Server is running on port 3500");
});

