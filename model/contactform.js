const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const formSchema =  new Schema({
  name :{
    type: String,
    required: true
  },
  mail:{
    type: String,
    required: true
  },
  subject:{
    type : String,
    required : true
  },
  message:{
    type : String,
    required : true 
  }
}, {timestamps : true});

const Form = mongoose.model('form-data' , formSchema);
module.exports = Form;