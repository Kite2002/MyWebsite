const express = require('express');
const ejs = require('ejs');
const env = require('dotenv').config();
const mongoose = require('mongoose');
const Form = require('./model/contactform');

const dburi = process.env.DATABASE_LINK;

//connect to database and listen to port
mongoose
  .connect(dburi,{useNewUrlParser:true ,useUnifiedTopology:true})
  .then((result) =>{
    console.log('Connected to DB')
    app.listen(process.env.PORT,()=>{
      console.log('listening to port 2100')
    });
  })
  .catch((err)=>{
    console.log(err);
  })


//express app
const app = express();

//view engine
app.set('view engine', 'ejs');

//STATIC FILES
app.use(express.static("static"));
//middleware to parse data
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.render("index",{title:'Home'});
})




//store messages in database
app.post("/" , (req,res)=>{
  const form = new Form(req.body);
  form.save()
    .then((result)=>{
      res.render("posted",{title:'Message Recived' , data : result})
    })
    .catch(err=>{
      console.log(err);
    })
})

