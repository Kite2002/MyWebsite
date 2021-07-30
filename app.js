const express = require('express');
const ejs = require('ejs');



//express app
const app = express();
//listen to port 2000
app.listen(2100,()=>{
  console.log('listening to port 2100')
});
//view engine
app.set('view engine', 'ejs');
//STATIC FILES
app.use(express.static("static"));

app.get("/",(req,res)=>{
  res.render("index",{title:'Home'});
})