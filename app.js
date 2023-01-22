const express = require('express');
const ejs = require('ejs');
const env = require('dotenv').config();
const mongoose = require('mongoose');
const Form = require('./model/contactform');
const nodemailer = require("nodemailer");


//express app
const app = express();
// connect to database and listen to port


// app.listen(process.env.PORT, () => {
//   console.log(process.env.PORT)
// });




//view engine
app.set('view engine', 'ejs');

//STATIC FILES
app.use(express.static("static"));

//middleware to parse data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { title: 'Home', msg: "" });
})

//store messages in database
app.post("/", (req, res) => {
  async function main() {
    // let transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EUSER, 
    //     pass: process.env.EKEY, 
    //   },
    // });

    // let info = await transporter.sendMail({
    //   from: `"Debabrata" ${process.env.EUSER}`, // sender address
    //   to: `${req.body.mail}`, // list of receivers
    //   subject: "Thanks for contacting", // Subject line
    //   text: "", // plain text body
    //   html: `<font><h4>${req.body.name} Thank you for visiting my website and leaving a message.<br>Your Message details are:<br>
    //   <ul>
    //   <li>From :<br> ${req.body.name} </li><br>
    //   <li>Mail :<br> ${req.body.mail} </li><br>
    //   <li>Subject :<br>${req.body.subject}</li><br>
    //   <li>Message :<br> ${req.body.message} </li><br>
    //   </ul></h4></font>`, // html body
    // }).then(()=>{
    //   res.render("index", { title: 'Home', msg: 'Message recived' , cls: 'success' })
    //   .then((result) => {
    //   })
    //   .catch(err=>{
    //   })
    // })
    // .catch(err => {
    //   res.render("index", { title: 'Home', msg: 'Invalid Email' , cls: 'error' });
    // })
    
    console.log("post called")
  }


  main().catch(); 

})

app.listen(process.env.PORT, () => console.log(process.env.PORT))
