 var mongoose = require('mongoose');

//Schema

var categoryschema = new mongoose.Schema({

     c_name: {
          type: String,
     },
     email: {
          type: String,
     },
     password: {
          type: String,
     }
});

module.exports = mongoose.model('categoremodel',categoryschema);